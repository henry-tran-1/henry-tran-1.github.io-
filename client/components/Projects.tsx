import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
  const [biteShare, setBiteShare] = useState(0)
  const [familyMapper, setFamilyMapper] = useState(0)
  const [taskManager, setTaskManager] = useState(0)

  const handleScroll = () => {
    const element = document.getElementById('about')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // next and prev buttons for family mapper carousel
  const handleFamilyMapperNext = () => {
    setFamilyMapper((prev) => {
      if (prev === 3) return 0
      else return prev + 1
    })
    console.log(familyMapper)
  }
  const handleFamilyMapperPrev = () => {
    setFamilyMapper((prev) => {
      if (prev === 0) return 3
      else return prev - 1
    })
  }

  // next and prev buttons for bite share carousel
  const handleBiteshareNext = () => {
    setBiteShare((prev) => {
      if (prev === 3) return 0
      else return prev + 1
    })
  }
  const handleBitesharePrev = () => {
    setBiteShare((prev) => {
      if (prev === 0) return 3
      else return prev - 1
    })
  }

  // next and prev buttons for task manager carousel
  const handleTaskManagerNext = () => {
    setTaskManager((prev) => {
      if (prev === 2) return 0
      else return prev + 1
    })
  }
  const handleTaskManagerPrev = () => {
    setTaskManager((prev) => {
      if (prev === 0) return 2
      else return prev - 1
    })
  }

  return (
    <div id="projects" className="flex w-full items-center justify-center">
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
            <div className="text-md mt-4 flex w-full justify-start gap-4 font-body font-semibold">
              <a
                href="https://github.com/henry-tran-1/family-mapper"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-gray-800 p-1 text-white hover:bg-amber-400 hover:text-gray-800"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="relative w-[350px]">
            <img
              src={`/images/family_mapper_${familyMapper}.jpg`}
              alt="family mapper gallery"
              className="ml-8 "
            />
            <button
              className="absolute -right-10 top-1/2"
              onClick={handleFamilyMapperNext}
            >
              <img src="/images/right.svg" alt="next button" className="w-8" />
            </button>
            <button
              className="absolute -left-2 top-1/2"
              onClick={handleFamilyMapperPrev}
            >
              <img
                src="/images/left.svg"
                alt="previous button"
                className="w-8"
              />
            </button>
          </div>
        </section>

        <hr className="my-4 w-3/5 border-t border-gray-600" />

        {/* Bite Share */}
        <section className="my-20 flex w-full items-center justify-around">
          <div className="relative w-[450px]">
            <img
              src={`/images/bite_share_${biteShare}.jpg`}
              alt="bite share gallery"
              className="mr-8"
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
              system for simple communication, built using RESTful API CRUD
              operations.
            </p>
            <div className="text-md mt-2 flex w-full justify-start gap-4 font-body font-semibold">
              <a
                href="https://bite-share-pohutukawa24.devacademy.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-gray-800 p-1 text-white hover:bg-amber-400 hover:text-gray-800 "
              >
                View Live
              </a>
              <a
                href="https://github.com/henry-tran-1/bite-share"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-gray-800 p-1 text-white hover:bg-amber-400 hover:text-gray-800"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        <hr className="my-4 w-3/5 border-t border-gray-600" />

        {/* Task Manager */}
        <section className="mb-10 mt-20 flex w-full items-center justify-around">
          <div className="w-[500px]">
            <h2 className="my-8 text-left font-heading text-2xl font-thin">
              PERSONAL PROJECT
            </h2>
            <h1 className="my-4 text-left font-heading text-4xl">
              Task Manager
            </h1>
            <p className="text-left font-body text-lg font-thin">
              Task manager is a simple productivity app designed to help users
              stay organised and on track of their tasks.
            </p>
            <div className="text-md mt-2 flex w-full justify-start gap-4 font-body font-semibold">
              <button className="rounded-md bg-gray-800 p-1 text-white hover:bg-amber-400 hover:text-gray-800">
                GitHub
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={`/images/task_manager_${taskManager}.png`}
              alt="task manager gallery"
              className="ml-8 h-[250px]"
            />
            <button
              className="absolute -right-10 top-1/2"
              onClick={handleTaskManagerNext}
            >
              <img src="/images/right.svg" alt="next button" className="w-8" />
            </button>
            <button
              className="absolute -left-2 top-1/2"
              onClick={handleTaskManagerPrev}
            >
              <img
                src="/images/left.svg"
                alt="previous button"
                className="w-8"
              />
            </button>
          </div>
        </section>
        <button onClick={handleScroll} className="mb-40 mt-8">
          <FontAwesomeIcon
            icon={faCaretDown}
            className="animate-bounceChevron text-4xl text-amber-400 duration-100 hover:text-black"
          />
        </button>
      </div>
    </div>
  )
}
