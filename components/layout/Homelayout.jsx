import Link from 'next/link'
import Logo from '../Icons/Logo'

const Homelayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black h-16 flex justify-center items-center">
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
      </header>
      {children}
      <footer className="h-16 bg-black mt-auto flex justify-center items-center">
        <p className="text-white">Todos los derechos reservados ©2021</p>
      </footer>
    </div>
  )
}

export default Homelayout
