import Image from 'next/image'
import Icon from '../../static/icon-search.svg'
const InputSearch = (props) => {
  const { onChange } = props
  return (
    <div className="flex items-center border border-gray rounded-md ">
      <Image src={Icon} alt="Icon search" width={32} height={32} />
      <input
        type="text"
        className="w-full rounded-md h-10 appearance-none focus:outline-none px-4"
        onChange={onChange}
      />
    </div>
  )
}
export default InputSearch
