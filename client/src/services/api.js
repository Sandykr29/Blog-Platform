import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api' });

// For adding token in headers
API.interceptors.request.use((req) => {
  const profile = localStorage.getItem('profile');
  if (profile) {
    req.headers.Authorization = `Bearer ${JSON.parse(profile).token}`;
  }
  return req;
});

// Auth
export const register = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);

// Posts
export const createPost = (postData) => API.post('/posts', postData);
export const getPosts = () => API.get('/posts');
export const getPost = (id) => API.get(`/posts/${id}`);
export const updatePost = (id, postData) => API.put(`/posts/${id}`, postData);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/like`);
export const commentPost = (id, comment) => API.post(`/posts/${id}/comment`, comment);
