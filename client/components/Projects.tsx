import { useState } from 'react'

export default function Projects() {
  const [biteshare, setBiteshare] = useState(0)

  const handleBiteshareNext = () => {
    setBiteshare((prev) => {
      if (prev === 3) return 0
      else return prev + 1
    })
  }
  const handleBitesharePrev = () => {
    setBiteshare((prev) => {
      if (prev === 0) return 3
      else return prev - 1
    })
  }

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-4/6 flex-col items-center text-center">
        <h1 className="mb-2 font-heading text-7xl">projects</h1>
        {/* Family Mapper */}
        <section className="my-20 flex w-full items-center justify-around">
          <div className="w-[500px]">
            <h2 className="my-8 text-left font-heading text-2xl font-thin">
              PERSONAL PROJECT
            </h2>
            <h1 className="my-4 text-left font-heading text-4xl">
              Family Mapper
            </h1>
            <p className="text-left font-body text-lg font-thin">
              Family mapper is an interactive app that enables users to
              visualise and expand their family tree. It makes use of recursive
              data querying to dynamically render connections between all family
              members.
            </p>
            <div className="text-md m-2 flex w-full justify-center gap-4 font-body font-semibold">
              <button className="rounded-md bg-amber-400 p-1 ">
                View Live
              </button>
              <button className="rounded-md bg-amber-400 p-1">GitHub</button>
            </div>
          </div>
          <img
            src="/images/biteshare_3.png"
            alt="bite share homepage"
            className="ml-8 h-[250px]"
          />
        </section>

        {/* Bite Share */}
        <section className="my-20 flex w-full items-center justify-around">
          <div className="relative">
            <img
              src={`/images/biteshare_${biteshare}.png`}
              alt="bite share homepage"
              className="mr-8 h-[250px]"
            />
            <button
              className="absolute -right-2 top-1/2"
              onClick={handleBiteshareNext}
            >
              <img src="/images/right.svg" alt="next button" className="w-8" />
            </button>
            <button
              className="absolute -left-10 top-1/2"
              onClick={handleBitesharePrev}
            >
              <img
                src="/images/left.svg"
                alt="previous button"
                className="w-8"
              />
            </button>
          </div>
          <div className="w-[500px]">
            <h2 className="my-8 text-left font-heading text-2xl font-thin">
              GROUP PROJECT - PRODUCT OWNER
            </h2>
            <h1 className="my-4 text-left font-heading text-4xl">Bite Share</h1>
            <p className="text-left font-body text-lg font-thin">
              Bite Share is a web application designed to foster community
              connections by matching individuals or organizations willing to
              donate food with those in need. It features a static messaging
              system for simple communication, built with basic CRUD operations.
            </p>
            <div className="text-md m-2 flex w-full justify-center gap-4 font-body font-semibold">
              <button className="rounded-md bg-amber-400 p-1">View Live</button>
              <button className="rounded-md bg-amber-400 p-1">GitHub</button>
            </div>
          </div>
        </section>

        {/* Task Manager */}
        <section className="my-20 flex w-full items-center justify-around">
          <div className="w-[500px]">
            <h2 className="my-8 text-left font-heading text-2xl font-thin">
              PERSONAL PROJECT
            </h2>
            <h1 className="my-4 text-left font-heading text-4xl">
              Task Manager
            </h1>
            <p className="text-left font-body text-lg font-thin">
              Text about the project. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Necessitatibus omnis fugit esse rem! Saepe dolor
              voluptatem amet sed dolore sequi harum aut molestiae culpa
              doloribus rem veritatis, officiis mollitia officia.
            </p>
            <div className="text-md m-2 flex w-full justify-center gap-4 font-body font-semibold">
              <button className="rounded-md bg-amber-400 p-1 ">
                View Live
              </button>
              <button className="rounded-md bg-amber-400 p-1">GitHub</button>
            </div>
          </div>
          <img
            src="/images/bite_share_1.png"
            alt="bite share homepage"
            className="ml-8 h-[250px]"
          />
        </section>
      </div>
    </div>
  )
}
