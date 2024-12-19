export default function About() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-4/6 flex-col items-center justify-center text-center">
        <h1 className="font-heading text-7xl">about</h1>
        <div className="mb-8 flex items-center justify-center">
          <img
            src="Public/images/aboutme_picture.png"
            alt="henry in the garden"
            className="w-[400px]"
          />
          <section className="mx-16">
            <p className="font-body text-xl">
              About me text. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Suscipit, repudiandae, itaque inventore unde asperiores
              fugit blanditiis nobis architecto doloremque ad tempore rem maxime
              alias voluptatibus earum eveniet numquam obcaecati nam!
            </p>
          </section>
        </div>
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
