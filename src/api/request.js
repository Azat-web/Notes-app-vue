import axios from 'axios'
import qs from 'qs'

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    paramsSerializer: params => qs.stringify(params)
  })

export default request
  