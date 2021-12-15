import { trackPromise } from 'react-promise-tracker'
import useProviders from '../../providers'

const useMarvelComic = () => {
  const { useMarvelComicProvider } = useProviders()
  const { getComicsProvider, getComicByIdProvider } = useMarvelComicProvider()

  const getComicsService = (params) => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(trackPromise(getComicsProvider(params)))
      } catch (error) {
        reject(error)
      }
    })
  }

  const getComicByIdService = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(trackPromise(getComicByIdProvider(id)))
      } catch (error) {
        reject(error)
      }
    })
  }

  return {
    getComicsService,
    getComicByIdService,
  }
}
export default useMarvelComic