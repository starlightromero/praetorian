import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers: {
    'content-type': 'application/json'
  }
})

api.defaults.headers.common['Authorization'] = localStorage.getItem('token')

export default api
