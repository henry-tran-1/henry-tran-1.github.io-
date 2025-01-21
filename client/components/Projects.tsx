/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
  const [biteShare, setBiteShare] = useState(0)
  const [familyMapper, setFamilyMapper] = useState(0)
  const [taskManager, setTaskManager] = useState(0)

  // state to handle modal lightbox for family mapper
  const [isImageOpenFM, setIsImageOpenFM] = useState(false)
  const [currentImageFM, setCurrentImageFM] = useState('')

  // state to handle modal lightbox for bite share
  const [isImageOpenBS, setIsImageOpenBS] = useState(false)
  const [currentImageBS, setCurrentImageBS] = useState('')

  // state to handle modal lightbox for task manager
  const [isImageOpenTM, setIsImageOpenTM] = useState(false)
  const [currentImageTM, setCurrentImageTM] = useState('')

  // handle smooth scrolling
  const handleScroll = () => {
    const element = document.getElementById('about')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // next and prev buttons for family mapper carousel
  const handleFamilyMapperNext = () => {
    setFamilyMapper((prev) => {
      const newIndex = prev === 3 ? 0 : prev + 1
      setCurrentImageFM(`/images/family_mapper_${newIndex}.jpg`)
      return newIndex
    })
  }
  const handleFamilyMapperPrev = () => {
    setFamilyMapper((prev) => {
      const newIndex = prev === 0 ? 3 : prev - 1
      setCurrentImageFM(`/images/family_mapper_${newIndex}.jpg`)
      return newIndex
    })
  }

  // next and prev buttons for bite share carousel
  const handleBiteshareNext = () => {
    setBiteShare((prev) => {
      const newIndex = prev === 3 ? 0 : prev + 1
      setCurrentImageBS(`/images/bite_share_${newIndex}.jpg`)
      return newIndex
    })
  }
  const handleBitesharePrev = () => {
    setBiteShare((prev) => {
      const newIndex = prev === 0 ? 3 : prev - 1
      setCurrentImageBS(`/images/bite_share_${newIndex}.jpg`)
      return newIndex
    })
  }

  // next and prev buttons for task manager carousel
  const handleTaskManagerNext = () => {
    setTaskManager((prev) => {
      const newIndex = prev === 2 ? 0 : prev + 1
      setCurrentImageTM(`/images/task_manager_${newIndex}.png`)
      return newIndex
    })
  }
  const handleTaskManagerPrev = () => {
    setTaskManager((prev) => {
      const newIndex = prev === 0 ? 2 : prev - 1
      setCurrentImageTM(`/images/task_manager_${newIndex}.png`)
      return newIndex
    })
  }

  // handles modal lightbox for FM
  const handleOpenImageFM = () => {
    setCurrentImageFM(`/images/family_mapper_${familyMapper}.jpg`)
    setIsImageOpenFM(true)
  }

  // handles modal lightbox for BS
  const handleOpenImageBS = () => {
    setCurrentImageBS(`/images/bite_share_${biteShare}.jpg`)
    setIsImageOpenBS(true)
  }

  // handles modal lightbox for TM
  const handleOpenImageTM = () => {
    setCurrentImageTM(`/images/task_manager_${taskManager}.png`)
    setIsImageOpenTM(true)
  }

  return (
    <div id="projects" className="flex w-full items-center justify-center">
      <div className="flex w-4/6 flex-col items-center text-center">
        <h1 className="mb-10 font-heading text-5xl lg:mb-20 lg:text-7xl">
          projects
        </h1>

        {/* Family Mapper */}
        <section className="mb-20 flex w-full flex-col items-start justify-between lg:flex-row">
          <div className="mr-2 lg:w-[450px]">
            <h1 className="mb-4 text-left font-heading text-2xl">
              Family Mapper
            </h1>
            <h2 className="mb-4 text-left font-heading text-base font-thin lg:mb-8">
              PERSONAL PROJECT
            </h2>
            <p className="text-left font-body text-base font-thin">
              Family mapper is an interactive app that enables users to
              visualise and expand their family tree. It makes use of recursive
              data querying to dynamically render connections between all family
              members.
            </p>
            <div className="my-2 flex w-full justify-start gap-4 font-body text-base font-semibold lg:mt-4">
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
          <div className="relative mx-2 rounded-md border-2 border-black lg:mx-0 lg:ml-10 lg:w-[350px]">
            <img
              src={`/images/family_mapper_${familyMapper}.jpg`}
              alt="family mapper gallery"
              className="cursor-pointer rounded-sm"
              onClick={() => handleOpenImageFM()}
            />
            <button
              className="absolute -right-10 top-1/2"
              onClick={handleFamilyMapperNext}
            >
              <img src="/images/right.svg" alt="next button" className="w-8" />
            </button>
            <button
              className="absolute -left-10 top-1/2"
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

        {isImageOpenFM && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setIsImageOpenFM(false)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={currentImageFM}
                alt="enlarged view"
                className="max-h-[90vh] max-w-[90vw] rounded-md"
              />
              <button
                onClick={() => setIsImageOpenFM(false)}
                className="absolute right-0 top-0 border-black p-4 text-2xl font-bold text-black"
              >
                X
              </button>
              <button
                className="absolute right-2 top-1/2"
                onClick={handleFamilyMapperNext}
              >
                <img
                  src="/images/right.svg"
                  alt="next button"
                  className="w-8"
                />
              </button>
              <button
                className="absolute left-2 top-1/2"
                onClick={handleFamilyMapperPrev}
              >
                <img
                  src="/images/left.svg"
                  alt="previous button"
                  className="w-8"
                />
              </button>
            </div>
          </div>
        )}

        <hr className="my-4 w-3/5 border-t border-gray-600" />

        {/* Bite Share */}
        <section className="my-20 flex w-full flex-col-reverse items-start justify-between lg:flex-row">
          <div className="relative mx-2 rounded-md border-2 border-black lg:mx-0 lg:ml-10 lg:w-[350px]">
            <img
              src={`/images/bite_share_${biteShare}.jpg`}
              alt="bite share gallery"
              className="cursor-pointer rounded-md"
              onClick={() => handleOpenImageBS()}
            />
            <button
              className="absolute -right-10 top-1/2"
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
          <div className="ml-2 lg:w-[450px]">
            <h1 className="mb-4 text-left font-heading text-2xl">Bite Share</h1>
            <h2 className="mb-4 text-left font-heading text-base font-thin lg:mb-8">
              GROUP PROJECT (PRODUCT OWNER)
            </h2>
            <p className="text-left font-body text-base font-thin">
              Bite Share is a web application designed to foster community
              connections by matching individuals or organizations willing to
              donate food with those in need. It features a static messaging
              system for simple communication, built using RESTful API CRUD
              operations.
            </p>
            <div className="my-2 flex w-full justify-start gap-4 font-body text-base font-semibold lg:mt-4">
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

        {isImageOpenBS && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setIsImageOpenBS(false)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={currentImageBS}
                alt="enlarged view"
                className="max-h-[90vh] max-w-[90vw] rounded-md"
              />
              <button
                onClick={() => setIsImageOpenBS(false)}
                className="absolute right-0 top-0 border-black p-4 text-2xl font-bold text-black"
              >
                X
              </button>
              <button
                className="absolute right-2 top-1/2"
                onClick={handleBiteshareNext}
              >
                <img
                  src="/images/right.svg"
                  alt="next button"
                  className="w-8"
                />
              </button>
              <button
                className="absolute left-2 top-1/2"
                onClick={handleBitesharePrev}
              >
                <img
                  src="/images/left.svg"
                  alt="previous button"
                  className="w-8"
                />
              </button>
            </div>
          </div>
        )}

        <hr className="my-4 w-3/5 border-t border-gray-600" />

        {/* Task Manager */}
        <section className="my-20 flex w-full flex-col items-start justify-between lg:flex-row">
          <div className="mr-2 lg:w-[450px]">
            <h1 className="mb-4 text-left font-heading text-2xl">
              Task Manager (TBC)
            </h1>
            <h2 className="mb-4 text-left font-heading text-base font-thin lg:mb-8">
              PERSONAL PROJECT
            </h2>
            <p className="text-left font-body text-base font-thin">
              Task manager is a simple productivity app designed to help users
              stay organised and on track of their tasks.
            </p>
            <div className="my-2 flex w-full justify-start gap-4 font-body text-base font-semibold lg:mt-4">
              <button className="rounded-md bg-gray-800 p-1 text-white hover:bg-amber-400 hover:text-gray-800">
                GitHub
              </button>
            </div>
          </div>
          <div className="relative mx-2 rounded-md border-2 border-black lg:mx-0 lg:ml-10 lg:w-[350px]">
            <img
              src={`/images/task_manager_${taskManager}.png`}
              alt="task manager gallery"
              className="cursor-pointer rounded-sm"
              onClick={() => handleOpenImageTM()}
            />
            <button
              className="absolute -right-10 top-1/2"
              onClick={handleTaskManagerNext}
            >
              <img src="/images/right.svg" alt="next button" className="w-8" />
            </button>
            <button
              className="absolute -left-10 top-1/2"
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

        {isImageOpenTM && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={() => setIsImageOpenTM(false)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={currentImageTM}
                alt="enlarged view"
                className="max-h-[90vh] max-w-[90vw] rounded-md"
              />
              <button
                onClick={() => setIsImageOpenTM(false)}
                className="absolute right-0 top-0 border-black p-4 text-2xl font-bold text-black"
              >
                X
              </button>
              <button
                className="absolute right-2 top-1/2"
                onClick={handleTaskManagerNext}
              >
                <img
                  src="/images/right.svg"
                  alt="next button"
                  className="w-8"
                />
              </button>
              <button
                className="absolute left-2 top-1/2"
                onClick={handleTaskManagerPrev}
              >
                <img
                  src="/images/left.svg"
                  alt="previous button"
                  className="w-8"
                />
              </button>
            </div>
          </div>
        )}

        <button onClick={handleScroll} className="mb-28 mt-8">
          <FontAwesomeIcon
            icon={faCaretDown}
            className="animate-bounceChevron text-4xl text-amber-400 duration-100 hover:text-black"
          />
        </button>
      </div>
    </div>
  )
}
