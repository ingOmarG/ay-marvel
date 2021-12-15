import Loader from 'react-loader-spinner'
import { usePromiseTracker } from 'react-promise-tracker'

const SpinLoader = () => {
  const { promiseInProgress } = usePromiseTracker()
  return (
    <>
      {promiseInProgress && (
        <div className="flex translate-1/2 justify-center items-center mx-auto">
          <Loader
            type="Grid"
            color="#e23636"
            height={100}
            width={100}
          />
        </div>
      )}
    </>
  )
}

export default SpinLoader
