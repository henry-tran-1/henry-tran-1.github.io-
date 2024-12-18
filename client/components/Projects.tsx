export default function Projects() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-4/6 flex-col items-center text-center">
        <h1 className="mb-2 font-heading text-7xl">projects</h1>
        <section className="my-20 flex w-full justify-around">
          <div>
            <h2 className="my-8 text-left font-heading text-2xl font-thin">
              PERSONAL PROJECT
            </h2>
            <h1 className="text-left font-heading text-4xl">Family Mapper</h1>
            <p className="text-left">Text about the project</p>
          </div>
          <img
            src="Public/images/bite_share_1.png"
            alt="bite share homepage"
            className="w-[400px]"
          />
        </section>
        <section className="my-20 flex w-full justify-around">
          <img
            src="Public/images/bite_share_1.png"
            alt="bite share homepage"
            className="w-[400px]"
          />
          <div>
            <h2 className="my-8 text-left font-heading text-2xl font-thin">
              GROUP PROJECT - PRODUCT OWNER
            </h2>
            <h1 className="text-left font-heading text-4xl">Bite Share</h1>
            <p className="text-left">Text about the project</p>
          </div>
        </section>
      </div>
    </div>
  )
}
