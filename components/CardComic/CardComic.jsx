import Image from 'next/image'
import Link from 'next/link'

const CardCommic = (props) => {
  const { id, title, description, price, thumbnail } = props
  return (
    <Link href={`/comic/${id}`} passHref>
      <div className="px-6 w-full md:w-1/3 pb-6 hover:scale-105 ease-in-out cursor-pointer duration-700">
        <div className="w-full shadow-md h-full rounded">
          <div className="bg-gray h-64 flex justify-center items-center">
            <Image
              src={`${thumbnail.path}.${thumbnail.extension}`}
              alt={title}
              width={200}
              height={200}
              priority={true}
            />
          </div>
          <div className="p-4 h-40 flex flex-col">
            <h3 className="font-bold text-base leading-none">{title}</h3>
            <p className="text-xs mt-2 truncate-2-lines">{description}</p>
            {price > 0 && (
              <div className="mt-auto flex justify-end">
                <span className="bg-red text-white px-4 py-1 font-semibold">
                  {price} USD
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardCommic
