import axios from 'axios'
import { AsyncStorage } from 'react-native'

// let url
// if (__DEV__) {
//   url: 'http://13634cbf.ngrok.io'
// } else {
//   url = 'https://sleepy-savannah-10606.herokuapp.com'
// }

const instance = axios.create({
  baseURL: 'http://13634cbf.ngrok.io',
})

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

export default instance
