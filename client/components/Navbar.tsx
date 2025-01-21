import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useState } from 'react'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleMenu = () => {
    setToggleMenu((prev) => !prev)
  }

  return (
    <div>
      <section className="hidden justify-end gap-4 font-body font-thin lg:flex">
        <a href="#home" className="hover:font-semibold">
          Home
        </a>
        <a href="#projects" className="hover:font-semibold">
          Projects
        </a>
        <a href="#about" className="hover:font-semibold">
          About
        </a>
        <a href="#contact" className="hover:font-semibold">
          Contact
        </a>
      </section>
      <button onClick={() => handleMenu()} className="p-2 lg:hidden">
        <FontAwesomeIcon icon={faBars} className="text-4xl" />
      </button>
      <section
        className={`${toggleMenu ? 'fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-[#f0f0f0]' : 'hidden'}`}
      >
        <div className="flex flex-col gap-4 text-center font-body text-4xl font-thin">
          <button
            onClick={() => handleMenu()}
            className="absolute right-4 top-4 p-4 text-4xl font-bold text-black"
          >
            <FontAwesomeIcon icon={faX} />
          </button>
          <a
            href="#home"
            className="hover:font-semibold"
            onClick={() => handleMenu()}
          >
            Home
          </a>
          <a
            href="#projects"
            className="hover:font-semibold "
            onClick={() => handleMenu()}
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:font-semibold"
            onClick={() => handleMenu()}
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:font-semibold"
            onClick={() => handleMenu()}
          >
            Contact
          </a>
        </div>
      </section>
    </div>
  )
}
