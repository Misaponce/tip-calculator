import { Card } from '@/components'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center pt-10 sm:p-24">
      <h1 className='text-center relative mb-10 sm:mb-5 font-bold'>
        <span className='splitter tracking-[1rem]' aria-label="SPLITTER">
          SPLI
        </span>
      </h1>
      <Card />
    </main>
  )
}
