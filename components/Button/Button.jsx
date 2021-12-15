const Button = (props) => {
  const { label, onClick, classNameButton } = props

  return (
    <button
      onClick={onClick}
      className={`w-full bg-red text-white h-10 hover:bg-opacity-80 rounded-md font-bold appearance-none focus:outline-none ${classNameButton}`}
    >
      {label}
    </button>
  )
}
export default Button
