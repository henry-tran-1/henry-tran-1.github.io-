import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Links() {
  return (
    <div className="ml-10">
      <section className="flex justify-end gap-4 font-body font-thin">
        <a href="mailto:henrytran089@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/henry-tran-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
        </a>
        <a
          href="https://github.com/henry-tran-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </a>
      </section>
    </div>
  )
}
