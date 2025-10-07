"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../lib/config";
import {
  Users,
  MessageSquare,
  Eye,
  Trash2,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface ConsultationRequest {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  status: "new" | "contacted" | "in_progress" | "completed" | "cancelled";
}

const STATUS_COLORS: Record<string, string> = {
  new: "#FACC15", // yellow
  contacted: "#3B82F6", // blue
  "in progress": "#F97316", // orange
  completed: "#22C55E", // green
  cancelled: "#EF4444", // red
};

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<ConsultationRequest[]>([]);
  const [selectedRequest, setSelectedRequest] =
    useState<ConsultationRequest | null>(null);
  const [filter, setFilter] = useState<
    "all" | "new" | "contacted" | "in_progress" | "completed" | "cancelled"
  >("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/contacts`);
      const result = await response.json();

      if (result.success) {
        setRequests(result.data);
      } else {
        setError(result.message || "Failed to load requests");
      }
    } catch (error) {
      console.error("Error loading requests:", error);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateRequestStatus = async (
    id: string,
    status: ConsultationRequest["status"]
  ) => {
    try {
      const response = await fetch(`${API_URL}/api/contacts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const result = await response.json();

      if (result.success) {
        const updatedRequests = requests.map((req) =>
          req._id === id
            ? { ...req, status, updatedAt: new Date().toISOString() }
            : req
        );
        setRequests(updatedRequests);

        if (selectedRequest && selectedRequest._id === id) {
          setSelectedRequest({
            ...selectedRequest,
            status,
            updatedAt: new Date().toISOString(),
          });
        }
      } else {
        setError(result.message || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      setError("Network error. Please try again.");
    }
  };

  const deleteRequest = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/api/contacts/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.success) {
        const updatedRequests = requests.filter((req) => req._id !== id);
        setRequests(updatedRequests);

        if (selectedRequest && selectedRequest._id === id) {
          setSelectedRequest(null);
        }
      } else {
        setError(result.message || "Failed to delete request");
      }
    } catch (error) {
      console.error("Error deleting request:", error);
      setError("Network error. Please try again.");
    }
  };

  const filteredRequests = requests.filter(
    (req) => filter === "all" || req.status === filter
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "contacted":
        return <Eye className="w-4 h-4 text-blue-500" />;
      case "in_progress":
        return <Clock className="w-4 h-4 text-orange-500" />;
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "cancelled":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-yellow-100 text-yellow-800";
      case "contacted":
        return "bg-blue-100 text-blue-800";
      case "in_progress":
        return "bg-orange-100 text-orange-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const stats = {
    total: requests.length,
    new: requests.filter((r) => r.status === "new").length,
    contacted: requests.filter((r) => r.status === "contacted").length,
    inProgress: requests.filter((r) => r.status === "in_progress").length,
    completed: requests.filter((r) => r.status === "completed").length,
    cancelled: requests.filter((r) => r.status === "cancelled").length,
  };

  const pieData = [
    { name: "New", value: stats.new },
    { name: "Contacted", value: stats.contacted },
    { name: "In Progress", value: stats.inProgress },
    { name: "Completed", value: stats.completed },
    { name: "Cancelled", value: stats.cancelled },
  ];

  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (e) {
      // ignore
    } finally {
      localStorage.removeItem("authToken");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Admin Dashboard
              </h1>
              <p className="text-slate-600 mt-2">
                Manage consultation requests and track business metrics
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mx-4 mt-4 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span className="font-semibold">Error: </span>
            <span className="ml-1">{error}</span>
            <button
              onClick={() => setError("")}
              className="ml-auto text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
          <span className="ml-2 text-slate-600">Loading requests...</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">
                  Total Requests
                </p>
                <p className="text-3xl font-bold text-slate-900">
                  {stats.total}
                </p>
              </div>
              <div className="p-3 bg-slate-100 rounded-lg">
                <MessageSquare className="w-6 h-6 text-slate-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">New</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {stats.new}
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">
                  In Progress
                </p>
                <p className="text-3xl font-bold text-orange-600">
                  {stats.inProgress}
                </p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Completed</p>
                <p className="text-3xl font-bold text-green-600">
                  {stats.completed}
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Requests List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-slate-900">
                    Consultation Requests
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {(
                      [
                        "all",
                        "new",
                        "contacted",
                        "in_progress",
                        "completed",
                        "cancelled",
                      ] as const
                    ).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          filter === f
                            ? "bg-slate-800 text-white"
                            : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                        }`}
                      >
                        {f.replace("_", " ").toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                {filteredRequests.length === 0 ? (
                  <p className="text-slate-600 text-center py-4">
                    No requests found
                  </p>
                ) : (
                  <ul className="divide-y divide-slate-200">
                    {filteredRequests.map((req) => (
                      <li
                        key={req._id}
                        className={`flex justify-between items-center py-3 cursor-pointer hover:bg-slate-50 px-4 rounded-md transition-colors ${
                          selectedRequest?._id === req._id ? "bg-slate-50" : ""
                        }`}
                        onClick={() => setSelectedRequest(req)}
                      >
                        <div>
                          <p className="text-slate-900 font-medium">
                            {req.name}
                          </p>
                          <p className="text-slate-500 text-sm">{req.email}</p>
                        </div>
                        <div
                          className={`flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(
                            req.status
                          )}`}
                        >
                          {getStatusIcon(req.status)}
                          <span>{req.status.replace("_", " ")}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Request Details */}
          <div className="lg:col-span-1">
            {selectedRequest ? (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Request Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Name
                    </label>
                    <p className="text-slate-900">{selectedRequest.name}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <p className="text-slate-900">{selectedRequest.email}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Phone
                    </label>
                    <p className="text-slate-900">{selectedRequest.phone}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Service
                    </label>
                    <p className="text-slate-900 capitalize">
                      {selectedRequest.service}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <p className="text-slate-900 text-sm leading-relaxed">
                      {selectedRequest.message}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Created
                    </label>
                    <p className="text-slate-900 text-sm">
                      {new Date(selectedRequest.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Status
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {(
                        [
                          "new",
                          "contacted",
                          "in_progress",
                          "completed",
                          "cancelled",
                        ] as const
                      ).map((status) => (
                        <button
                          key={status}
                          onClick={() =>
                            updateRequestStatus(selectedRequest._id, status)
                          }
                          className={`px-2 py-1 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                            selectedRequest.status === status
                              ? getStatusColor(status)
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {status === "in_progress"
                            ? "In Progress"
                            : status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <button
                      onClick={() => deleteRequest(selectedRequest._id)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete Request
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <Users className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">
                  Select a request to view details
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Pie Chart Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            Requests Status Distribution
          </h2>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-2xl">
              <PieChart width={600} height={400}>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  label={({ name, value, percent }) =>
                    value > 0
                      ? `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
                      : ""
                  }
                  labelLine={false}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={STATUS_COLORS[entry.name.toLowerCase()]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [value, name]}
                  labelFormatter={(label) => `Status: ${label}`}
                />
                <Legend
                  verticalAlign="bottom"
                  height={50}
                  formatter={(value, entry) => (
                    <span style={{ color: entry.color, fontSize: "14px" }}>
                      {value}: {entry.payload?.value || 0}
                    </span>
                  )}
                />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
