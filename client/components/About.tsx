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
            <p className="font-body text-xl">About me text</p>
          </section>
        </div>
      </div>
    </div>
  )
}
