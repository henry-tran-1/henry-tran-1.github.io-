import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function LandingPage() {
  const handleScroll = () => {
    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="home" className="flex h-screen items-center justify-center">
      <div className="flex w-4/6 flex-col items-center justify-center text-center">
        <div className="w-full lg:mb-8 lg:flex lg:items-center lg:justify-center">
          <img
            src="/images/profile_picture_bg.jpg"
            alt="profile of henry"
            className="w-[300px] lg:w-[400px]"
          />
          <section className="lg:mx-16">
            <p className="font-md my-2 text-left font-heading text-5xl lg:text-7xl">
              henry tran
            </p>
            <p className="text-left font-body text-base font-thin lg:text-xl">
              FULL-STACK SOFTWARE DEVELOPER
            </p>
          </section>
        </div>
        <div className="mt-4 flex w-full flex-col items-start">
          <p className="text-left font-heading text-base opacity-60 lg:text-2xl">
            previously an optometrist...
          </p>
          <p className="font-md my-2 text-left font-heading text-base lg:text-2xl">
            now bringing my sharp focus and passion to the world of tech
          </p>
        </div>
        <button onClick={handleScroll} className="mt-8">
          <FontAwesomeIcon
            icon={faCaretDown}
            className="animate-bounceChevron text-4xl text-amber-400 duration-100 hover:text-black"
          />
        </button>
      </div>
    </div>
  )
}
