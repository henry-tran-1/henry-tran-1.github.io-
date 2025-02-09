import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Links() {
  return (
    <div>
      <section className="flex h-full items-center justify-center gap-4 font-body font-thin">
        <a href="mailto:henrytran089@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-4xl duration-100 hover:text-amber-400 lg:text-2xl"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/henry-tran-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-4xl duration-100 hover:text-amber-400 lg:text-2xl"
          />
        </a>
        <a
          href="https://github.com/henry-tran-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-4xl duration-100 hover:text-amber-400 lg:text-2xl"
          />
        </a>
      </section>
    </div>
  )
}
