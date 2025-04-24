
import Link from 'next/link'
import { unstable_ViewTransition as ViewTransition } from 'react'

export default function Home() {
  return (
    <div className='grid grid-cols-2 gap-4 sm:grid-rows-3 lg:grid-rows-2 min-h-full'>
      <div className="
      transition delay-100 duration-1000 ease-in-out hover:scale-102 p-10 col-span-2 md:col-span-1 
      ">
        <h2 className="text-2xl font-serif">Ben Eunsoo Ho</h2>
        <p className="text-balance">{`I'm a designer who speaks code, crafting design systems and component libraries that bring creative visions to life while making product development more intuitive and cohesive for teams.​​​​​​​​​​​​​​​​`}</p>
      </div>
      <ViewTransition name="title--portfolio">
        <Link href="/portfolio" className="
          bg-neutral-900 text-white flex justify-center items-center relative
          z-0 overflow-clip animate-scale-up-slow
          before:font-serif before:absolute
          before:text-9xl before:-z-10
          before:translate-x-1/3 before:translate-y-1/10
          before:content-['Portfolio']
          before:animate-flicker
          pointer-fine:before:content-none
          pointer-fine:hover:before:content-['Portfolio']
          pointer-fine:hover:before:animate-flicker
          transition delay-100 duration-1000 ease-in-out hover:scale-102
          text-base
          col-span-2 sm:col-span-1
          aspect-square sm:aspect-auto
          sm:row-span-2 lg:row-span-1
        ">
          Portfolio
        </Link>
      </ViewTransition>
      <ViewTransition name="title--case-studies">
        <Link href="/case-studies" className="
          bg-white text-black flex justify-center items-center relative
          z-0 overflow-clip animate-scale-up-slow
          before:font-serif before:absolute
          before:text-9xl before:-z-10
          before:translate-x-1/3 before:translate-y-1/10
          before:content-['Case\00a0Studies']
          before:animate-flicker
          pointer-fine:before:content-none
          pointer-fine:hover:before:content-['Case\00a0Studies']
          pointer-fine:hover:before:animate-flicker
          transition delay-100 duration-1000 ease-in-out hover:scale-102
          text-base
          col-span-2 sm:col-span-1
          aspect-square sm:aspect-auto
          sm:row-span-2 lg:row-span-1
          ">
          Case Studies
        </Link>
      </ViewTransition>
      <div className="place-items-end p-10 col-span-2 md:col-span-1">
        <Link className="transition delay-50 duration-1000 ease-in-out hover:scale-120 block" href="/">Linkedin</Link>
        <p className="transition delay-50 duration-1000 ease-in-out hover:scale-120">Résumé</p>
      </div>
    </div>
  )
}
