export default function About() {
  return (
    <div id="about" className="flex items-center justify-center">
      <div className="flex w-4/6 flex-col items-center justify-center text-center">
        <h1 className="font-heading text-7xl">about</h1>
        <div className="mb-8 flex items-center justify-center">
          <img
            src="/images/about_me.jpg"
            alt="henry in the garden"
            className="w-[400px]"
          />
          <section className="mx-16">
            <p className="my-2 font-body text-lg font-thin">
              Hi! I’m a full-stack developer based in Auckland with a unique
              background in optometry and academia. My journey from healthcare
              to software development combines a passion for solving real-world
              problems, collaborating with teams, and building impactful
              solutions.
            </p>
            <p className="font-body text-lg font-thin">
              When I&apos;m not behind the screen, you can find me struggling
              out on the disc golf course, or in my garden struggling with the
              weeds.
            </p>
          </section>
        </div>
        <p>Link to CV</p>
        <h1 className="font-heading text-7xl">toolkit</h1>
        <section className="flex flex-wrap gap-2">
          <p>Javascript</p>
          <p>Typescript</p>
          <p>React</p>
          <p>Express</p>
          <p>Node.js</p>
        </section>
      </div>
    </div>
  )
}
