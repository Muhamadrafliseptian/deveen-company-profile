import axios from 'axios'

const api = axios.create({
  baseURL: 'https://6cb5f5349086.ngrok-free.app/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default api
