import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Links from './Links'

export default function About() {
  return (
    <div id="about" className="flex items-center justify-center ">
      <div className="flex w-4/6 flex-col items-center justify-center text-center">
        <h1 className="mb-8 font-heading text-5xl lg:text-7xl">about me</h1>
        <div className="mb-8 items-start justify-center lg:flex">
          <img
            src="/images/about_me.jpg"
            alt="henry in the garden"
            className="mb-4 w-[350px] lg:mb-0"
          />
          <section className="lg:mx-16">
            <p className="mb-4 text-start font-body text-base font-thin lg:text-lg">
              Hi! I’m a full-stack developer based in Auckland with a unique
              background in optometry and academia. My journey from healthcare
              to software development combines a passion for solving real-world
              problems, collaborating with teams, and building impactful
              solutions.
            </p>
            <p className="text-start font-body text-base font-thin lg:text-lg">
              When I&apos;m not behind the screen, you can find me struggling
              out on the disc golf course, or in my garden struggling with the
              weeds.
            </p>
            <div className="mb-2 mt-8 flex items-center gap-8 ">
              <div className="text-start font-body text-lg hover:text-amber-400">
                <a
                  href="/docs/Henry_Tran_CV_online.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className="ml-1.5"
                />
              </div>
              <div>
                <Links />
              </div>
            </div>
          </section>
        </div>

        {/* Toolkit Section */}
        <h1 className="m-10 font-heading text-5xl lg:text-7xl">toolkit</h1>
        <section className="mb-28 flex flex-wrap justify-around">
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img
              src="/images/toolkit/javascript-color.svg"
              alt="javascript logo"
            />
            <p className="mt-1 font-body text-base">Javascript</p>
          </div>
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img
              src="/images/toolkit/typescript-color.svg"
              alt="typescript logo"
            />
            <p className="mt-1 font-body text-base">Typescript</p>
          </div>
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img src="/images/toolkit/react-color.svg" alt="react logo" />
            <p className="mt-1 font-body text-base">React</p>
          </div>
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img src="/images/toolkit/html5-color.svg" alt="HTML logo" />
            <p className="mt-1 font-body text-base">HTML5</p>
          </div>
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img src="/images/toolkit/css3-color.svg" alt="CSS logo" />
            <p className="mt-1 font-body text-base">CSS3</p>
          </div>
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img
              src="/images/toolkit/tailwindcss-color.svg"
              alt="tailwind logo"
            />
            <p className="mt-1 font-body text-base">Tailwind CSS</p>
          </div>
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img src="/images/toolkit/nodedotjs-color.svg" alt="node logo" />
            <p className="mt-1 font-body text-base">Node.js</p>
          </div>
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img src="/images/toolkit/express-color.svg" alt="express logo" />
            <p className="mt-1 font-body text-base">Express.js</p>
          </div>
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img src="/images/toolkit/sqlite-color.svg" alt="sqlite logo" />
            <p className="mt-1 font-body text-base">Sqlite</p>
          </div>
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img src="/images/toolkit/Knex.js.svg" alt="knex logo" />
            <p className="mt-1 font-body text-base">Knex.js</p>
          </div>
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img src="/images/toolkit/auth0-color.svg" alt="auth0 logo" />
            <p className="mt-1 font-body text-base">Auth0</p>
          </div>
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img src="/images/toolkit/vitest-color.svg" alt="vitest logo" />
            <p className="mt-1 font-body text-base">Vitest</p>
          </div>
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img
              src="/images/toolkit/storybook-color.svg"
              alt="storybook logo"
            />
            <p className="mt-1 font-body text-base">Storybook</p>
          </div>
          <div className="mx-5 my-2 flex w-10 flex-col items-center lg:mx-10 lg:w-14">
            <img src="/images/toolkit/python-color.svg" alt="python logo" />
            <p className="mt-1 font-body text-base">Python</p>
          </div>
        </section>
      </div>
    </div>
  )
}
