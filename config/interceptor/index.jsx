import { useEffect } from 'react'
import axios from 'axios'

const useInterceptor = () => {
  const handleRequestSuccess = (request) => {
    request.params['apikey'] = process.env.NEXT_PUBLIC_API_KEY
    request.headers['Content-Type'] = 'application/json'
    request.headers['accept'] = 'application/json'
    return request
  }
  const handleRequestError = (error) => {
    console.log(`REQUEST ERROR! => ${error}`)
  }

  const handleResponseSuccess = (response) => {
    return response
  }

  const handleResponseError = (error) => {
    console.log(`RESPONSE ERROR! => ${error}`)
  }

  useEffect(() => {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
    axios.defaults.params = {}
    axios.interceptors.request.use(handleRequestSuccess, handleRequestError)
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError)
  }, [])
}
export default useInterceptor
