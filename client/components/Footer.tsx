import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Navbar from './Navbar'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className="flex h-32 items-center justify-between bg-amber-400">
      <div className="ml-10">
        <div>
          <section className="flex gap-4 font-body font-thin">
            <a href="mailto:henrytran089@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-2xl duration-100 hover:text-3xl"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/henry-tran-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-2xl duration-100 hover:text-3xl"
              />
            </a>
            <a
              href="https://github.com/henry-tran-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl duration-100 hover:text-3xl"
              />
            </a>
          </section>
        </div>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faCopyright} className="m-2" />
        <p className="font-body font-thin">2025 Henry Tran</p>
      </div>
      <div className="mr-10 ">
        <Navbar />
      </div>
    </div>
  )
}
