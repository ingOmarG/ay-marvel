import useProviders from './providers'
import useServices from './services'
export const useApi = () => {
  return {
    useProviders,
    useServices,
  }
}
