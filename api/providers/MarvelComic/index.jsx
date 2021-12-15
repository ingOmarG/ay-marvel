import axios from 'axios'

const useMarvelComicProvider = () => {
  const getComicsProvider = (params) => {
    return axios({
      method: 'GET',
      url: `/comics`,
      params: params,
    })
  }

  const getComicByIdProvider = (id) => {
    return axios({
      method: 'GET',
      url: `/comics/${id}`,
    })
  }

  return {
    getComicsProvider,
    getComicByIdProvider,
  }
}

export default useMarvelComicProvider
