import Image from 'next/image'
import md5 from 'crypto-js/md5'
import { useComponents } from '../../components/useComponent'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'

const ComicDetail = ({ results }) => {
  console.log(results)
  const router = useRouter()
  const { Button, Homelayout } = useComponents()
  return (
    <Homelayout>
      <div className="container mx-auto pt-6 md:pt-20 px-8 max-w-7xl pb-12">
        <div className='w-20'>
          <Button label="back" onClick={() => router.back()} />
        </div>
        <div className="flex flex-wrap md:flex-nowrap mt-4">
          <div className="block md:hidden mb-5">
            <p className="font-bold text-xl md:text-4xl">{results[0].title}</p>
          </div>
          <div className="aspect-video w-full lg:w-1/3 h-[50vh] relative">
            <Image
              src={`${results[0].thumbnail.path}.${results[0].thumbnail.extension}`}
              alt={results[0].title}
              layout="fill"
            />
          </div>

          <div className="w-full flex-col md:pl-10">
            <p className="w-full font-bold  md:text-4xl  hidden md:flex">
              {results[0].title}
            </p>
            <p className="w-full font-semibold md:text-3xl mt-4 md:mt-10">
              Published:
            </p>
            <p className="w-full">
              {results[0].dates
                .filter((p) => p.type === 'onsaleDate')
                .map((w) => dayjs(w.date).format('MMMM D, YYYY'))}
            </p>
            <p className="w-full font-semibold md:text-3xl mt-4 md:mt-10">
              Writer(S):
            </p>
            <p className="w-full">
              {results[0].creators.items
                .filter((p) => p.role === 'writer')
                .map((w) => w.name)
                .join(', ')}
            </p>
            <p className='mt-10'>{results[0].description}</p>
          </div>
        </div>
      </div>
    </Homelayout>
  )
}

export default ComicDetail

export async function getServerSideProps({ params }) {
  const ts = Date.now()
  const hash = md5(
    ts +
      'c107abeeb9b8155ed6961548160c3783db481e87' +
      'a8995717d9f2467eff0af2266a4c8d5f'
  )
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comics/${params.id}?ts=${ts}&hash=${hash}&apikey=a8995717d9f2467eff0af2266a4c8d5f`
  )
  const { data } = await res.json()
  const { results } = data
  return {
    props: { results },
  }
}
