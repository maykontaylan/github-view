import axios from 'axios'

const service = axios.create({
    baseURL:'https://api.github.com/',
    headers: {
    "Content-type": "application/json"
  }
})

export default service;