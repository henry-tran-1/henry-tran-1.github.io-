import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Links from './Links'
import Navbar from './Navbar'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
  return (
    <div className="flex h-32 items-center justify-between bg-amber-400">
      <div className="ml-10">
        <Links />
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
