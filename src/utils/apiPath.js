// src/api/apiPath.js

const API_BASE = "http://localhost:8000/api"; // ganti sesuai URL backend kamu

const apiPath = {
  auth: {
    register: `${API_BASE}/auth/register`,
    login: `${API_BASE}/auth/login`,
    profile: `${API_BASE}/auth/profile`,
    updateProfile: `${API_BASE}/auth/profile`,
    uploadImage: `${API_BASE}/auth/upload-image`,
  },
  user: {
    getMe: `${API_BASE}/users/me`,
    updateMe: `${API_BASE}/users/me`,
    deleteMe: `${API_BASE}/users/me`,
  },
  task: {
    create: `${API_BASE}/tasks`,
    getAll: `${API_BASE}/tasks`,
    getById: (id) => `${API_BASE}/tasks/${id}`,
    update: (id) => `${API_BASE}/tasks/${id}`,
    delete: (id) => `${API_BASE}/tasks/${id}`,
    updateStatus: (id) => `${API_BASE}/tasks/${id}/status`,
    updateChecklist: (id) => `${API_BASE}/tasks/${id}/checklist`,
    progress: `${API_BASE}/tasks/progress`,
    dashboardSummary: `${API_BASE}/tasks/dashboard/summary`,
  },
  subject: {
    create: `${API_BASE}/subjects`,
    getAll: `${API_BASE}/subjects`,
    getById: (id) => `${API_BASE}/subjects/${id}`,
    update: (id) => `${API_BASE}/subjects/${id}`,
    delete: (id) => `${API_BASE}/subjects/${id}`,
  },
  exam: {
    create: `${API_BASE}/exams`,
    update: (id) => `${API_BASE}/exams/${id}`,
    delete: (id) => `${API_BASE}/exams/${id}`,
    getAll: `${API_BASE}/exams`,
  },
  event: {
    create: `${API_BASE}/events`,
    update: (id) => `${API_BASE}/events/${id}`,
    delete: (id) => `${API_BASE}/events/${id}`,
    getAll: `${API_BASE}/events`,
    getById: (id) => `${API_BASE}/events/${id}`,
    calendar: `${API_BASE}/events/calendar`,
  },
};

export default apiPath;
