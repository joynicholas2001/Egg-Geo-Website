import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export async function submitContactForm(data) {
  return api.post('/api/contact', data);
}

export default api;
