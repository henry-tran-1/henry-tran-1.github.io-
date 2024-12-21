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
        <div className="mb-8 flex items-center justify-center">
          <img
            src="/images/profile_picture_bg.jpg"
            alt="profile of henry"
            className="w-[400px]"
          />
          <section className="mx-16">
            <p className="font-md my-2 text-left font-heading text-7xl">
              henry tran
            </p>
            <p className="text-right font-body text-xl font-thin">
              FULL-STACK SOFTWARE DEVELOPER
            </p>
          </section>
        </div>
        <div className="mt-4">
          <p className="text-left font-heading text-2xl opacity-60">
            previously an optometrist...
          </p>
          <p className="font-md my-2 font-heading text-2xl">
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
