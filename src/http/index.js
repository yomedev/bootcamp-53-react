import axios from "axios";

export const publicApi = axios.create({
  baseURL: 'http://70.34.201.18:4444'
})

export const privateApi = axios.create({
  baseURL: 'http://70.34.201.18:4444',
  // headers: {
  //   Authorization: ''
  // },
})

export const token = {
  set(value) {
    privateApi.defaults.headers.Authorization = value
  },
  unset() {
    privateApi.defaults.headers.Authorization = null
  }
}