import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  ClockIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';

const AdminDashboard = () => {
  const { user, isAuthenticated, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('pending');
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionLoading, setActionLoading] = useState(null);

  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      fetchVendors();
    }
  }, [activeTab, isAuthenticated, isAdmin]);

  const fetchVendors = async () => {
    setLoading(true);
    setError('');
    
    try {
      const token = localStorage.getItem('token');
      const endpoint = activeTab === 'pending' 
        ? 'http://localhost:5000/api/vendors/pending'
        : 'http://localhost:5000/api/vendors/all';

      const response = await fetch(endpoint, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      
      if (data.success) {
        setVendors(data.data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error('Error fetching vendors:', err);
      setError('Failed to load vendors');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (vendorId) => {
    if (!window.confirm('Are you sure you want to approve this vendor?')) {
      return;
    }

    setActionLoading(vendorId);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/vendors/approve/${vendorId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Vendor approved successfully!');
        fetchVendors(); // Refresh list
      } else {
        alert(data.message || 'Failed to approve vendor');
      }
    } catch (err) {
      console.error('Error approving vendor:', err);
      alert('Failed to approve vendor');
    } finally {
      setActionLoading(null);
    }
  };

  const handleReject = async (vendorId) => {
    const reason = window.prompt('Enter rejection reason (optional):');
    if (reason === null) return; // User cancelled

    setActionLoading(vendorId);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/vendors/reject/${vendorId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reason: reason || 'Application did not meet requirements' })
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Vendor application rejected');
        fetchVendors(); // Refresh list
      } else {
        alert(data.message || 'Failed to reject vendor');
      }
    } catch (err) {
      console.error('Error rejecting vendor:', err);
      alert('Failed to reject vendor');
    } finally {
      setActionLoading(null);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600">Please log in to access the admin dashboard.</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600">You don't have permission to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user?.name}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Vendors</p>
                <p className="text-2xl font-bold text-gray-900">
                  {vendors.filter(v => v.vendorStatus === 'pending').length}
                </p>
              </div>
              <ClockIcon className="w-12 h-12 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved Vendors</p>
                <p className="text-2xl font-bold text-gray-900">
                  {vendors.filter(v => v.vendorStatus === 'approved').length}
                </p>
              </div>
              <CheckCircleIcon className="w-12 h-12 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Vendors</p>
                <p className="text-2xl font-bold text-gray-900">
                  {vendors.filter(v => v.role === 'vendor').length}
                </p>
              </div>
              <BuildingStorefrontIcon className="w-12 h-12 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'pending'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Pending Applications
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'all'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                All Vendors
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
                <p className="mt-4 text-gray-600">Loading vendors...</p>
              </div>
            ) : vendors.length === 0 ? (
              <div className="text-center py-12">
                <UserGroupIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  {activeTab === 'pending' 
                    ? 'No pending vendor applications' 
                    : 'No vendors found'}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {vendors.map((vendor) => (
                  <div 
                    key={vendor._id} 
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {vendor.businessName || vendor.name}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            vendor.vendorStatus === 'pending' 
                              ? 'bg-yellow-100 text-yellow-800'
                              : vendor.vendorStatus === 'approved'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {vendor.vendorStatus}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <p className="font-medium text-gray-700">Contact Person</p>
                            <p>{vendor.name}</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">Email</p>
                            <p>{vendor.email}</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">Phone</p>
                            <p>{vendor.phone || 'N/A'}</p>
                          </div>
                          <div>
                            <p className="font-medium text-gray-700">Business Address</p>
                            <p>{vendor.businessAddress || 'N/A'}</p>
                          </div>
                        </div>

                        {vendor.rejectionReason && (
                          <div className="mt-4 bg-red-50 border border-red-200 rounded p-3">
                            <p className="text-sm text-red-800">
                              <strong>Rejection Reason:</strong> {vendor.rejectionReason}
                            </p>
                          </div>
                        )}
                      </div>

                      {vendor.vendorStatus === 'pending' && (
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleApprove(vendor._id)}
                            disabled={actionLoading === vendor._id}
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <CheckCircleIcon className="w-5 h-5" />
                            {actionLoading === vendor._id ? 'Processing...' : 'Approve'}
                          </button>
                          <button
                            onClick={() => handleReject(vendor._id)}
                            disabled={actionLoading === vendor._id}
                            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <XCircleIcon className="w-5 h-5" />
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;