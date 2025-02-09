export default function Contact() {
  return (
    <div id="contact" className="flex items-center justify-center">
      <div className="justify-centertext-center flex w-4/6 flex-col items-center">
        <h1 className="mb-10 font-heading text-5xl lg:text-7xl">contact me</h1>
        <h3 className="mb-10 font-body text-base font-thin lg:w-3/4">
          Feel free to reach out if you&apos;d like to work together, chat about
          coding, or want to go throw some frisbees!
        </h3>

        <form
          action="https://formsubmit.co/ce16c5967906b4759d3d78a349946b8f"
          method="POST"
          className="mb-24 flex w-full flex-col lg:w-3/4"
        >
          <section className="mb-6 gap-6 lg:flex">
            <div className="mb-6 flex w-full flex-col lg:mb-0">
              <label htmlFor="name" className="font-body font-thin italic">
                Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                className="h-8 border-[1px] border-black p-2 font-body"
              />
            </div>
            <div className="flex w-full flex-col">
              <label htmlFor="subject" className="font-body font-thin italic">
                Subject
              </label>
              <input
                name="subject"
                id="subject"
                type="text"
                className="h-8 border-[1px] border-black p-2 font-body"
              />
            </div>
          </section>
          <section className="mb-6 flex flex-col">
            <label htmlFor="email" className="font-body font-thin italic">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="text"
              className="h-8 border-[1px] border-black p-2 font-body"
            />
          </section>
          <section className="mb-6 flex flex-col">
            <label htmlFor="message" className="font-body font-thin italic">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-[192px] border-[1px] border-black p-2 font-body lg:h-[128px]"
            />
          </section>
          <section className="flex justify-center">
            <button
              type="submit"
              className="w-fit rounded-lg bg-gray-300 px-3 py-1 font-body font-thin hover:bg-amber-400 hover:font-semibold"
            >
              SEND
            </button>
          </section>
        </form>
      </div>
    </div>
  )
}
