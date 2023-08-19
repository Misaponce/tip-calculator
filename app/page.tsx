import { Card } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-auto">
      <h1 className='text-center relative mt-5 sm:mt-0 mb-10 sm:mb-5 font-bold'>
        <span className='splitter tracking-[1rem]' aria-label="SPLITTER">
          SPLI
        </span>
      </h1>
      <Card />
    </main>
  )
}
