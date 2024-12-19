export default function Projects() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-4/6 flex-col items-center text-center">
        <h1 className="mb-2 font-heading text-7xl">projects</h1>
        <section className="my-20 flex w-full items-center justify-around">
          <div className="w-[500px]">
            <h2 className="my-8 text-left font-heading text-2xl font-thin">
              PERSONAL PROJECT
            </h2>
            <h1 className="my-4 text-left font-heading text-4xl">
              Family Mapper
            </h1>
            <p className="text-left font-body text-lg font-thin">
              Text about the project. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Necessitatibus omnis fugit esse rem! Saepe dolor
              voluptatem amet sed dolore sequi harum aut molestiae culpa
              doloribus rem veritatis, officiis mollitia officia.
            </p>
            <div className="text-md m-2 flex w-full justify-center gap-4 font-body font-semibold">
              <button className="rounded-md bg-amber-400 p-1 ">
                View Live
              </button>
              <button className="rounded-md bg-amber-400 p-1">GitHub</button>
            </div>
          </div>
          <img
            src="Public/images/bite_share_1.png"
            alt="bite share homepage"
            className="ml-8 h-[250px]"
          />
        </section>
        <section className="my-20 flex w-full items-center justify-around">
          <img
            src="Public/images/bite_share_1.png"
            alt="bite share homepage"
            className="mr-8 h-[250px]"
          />
          <div className="w-[500px]">
            <h2 className="my-8 text-left font-heading text-2xl font-thin">
              GROUP PROJECT - PRODUCT OWNER
            </h2>
            <h1 className="my-4 text-left font-heading text-4xl">Bite Share</h1>
            <p className="text-left font-body text-lg font-thin">
              Text about the project. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Necessitatibus omnis fugit esse rem! Saepe dolor
              voluptatem amet sed dolore sequi harum aut molestiae culpa
              doloribus rem veritatis, officiis mollitia officia.
            </p>
            <div className="text-md m-2 flex w-full justify-center gap-4 font-body font-semibold">
              <button className="rounded-md bg-amber-400 p-1">View Live</button>
              <button className="rounded-md bg-amber-400 p-1">GitHub</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
