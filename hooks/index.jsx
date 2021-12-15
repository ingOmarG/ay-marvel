import { useState } from 'react'
import { useApi } from '../api'
import md5 from 'crypto-js/md5'
import useConfig from '../config'

const useHome = ({ results }) => {
  const { useInterceptor } = useConfig()
  const [comics, setCommics] = useState(results)
  const { useServices } = useApi()
  const { useMarvelComic } = useServices()
  const { getComicsService } = useMarvelComic()
  const [inputInterval, setInputInterval] = useState(0)
  useInterceptor()

  const ts = Date.now()
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const key = 'c107abeeb9b8155ed6961548160c3783db481e87'
  const hash = md5(ts + key + apiKey).toString()

  const getCommicByHero = (hero) => {
    getComicsService({ ts: ts, hash: hash, titleStartsWith: hero }).then(
      ({ data }) => {
        setCommics(data.data.results)
      }
    )
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  const getComisSearch = ({ target }) => {
    const { value } = target
    if (inputInterval) {
      clearTimeout(inputInterval)
    }
    setInputInterval(
      setTimeout(() => {
        if (value.length > 0) {
          getComicsService({ ts: ts, hash: hash, titleStartsWith: value }).then(
            ({ data }) => {
              setCommics(data.data.results)
            }
          )
        }
      }, 800)
    )
  }

  const Heros = [
    { id: 1, label: 'Spider-man' },
    { id: 2, label: 'Wolverine' },
    { id: 3, label: 'Hulk' },
    { id: 4, label: 'Thor' },
  ]

  return {
    getCommicByHero,
    comics,
    Heros,
    getComisSearch,
    handleSearch,
  }
}

export default useHome
