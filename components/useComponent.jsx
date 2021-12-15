import dynamic from 'next/dynamic'

const CardComic = dynamic(() => import('./CardComic'))
const Button = dynamic(() => import('./Button'))
const Homelayout = dynamic(() => import('./layout'))
const SpinLoader = dynamic(() => import('./SpinLoader'))
const InputSearch = dynamic(() => import('./InputSearch'))

export const useComponents = () => {
  return {
    Homelayout,
    CardComic,
    Button,
    SpinLoader,
    InputSearch
  }
}
