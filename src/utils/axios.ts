import axios from 'axios'

const URL = `https://jsonplaceholder.typicode.com`

const axiosApi = axios.create({
  baseURL: URL,
  timeout: 20000,
})

export default axiosApi