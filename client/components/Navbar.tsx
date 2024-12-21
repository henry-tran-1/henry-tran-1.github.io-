export default function Navbar() {
  return (
    <div>
      <section className="flex justify-end gap-4 font-body font-thin">
        <a href="#home" className="hover:font-semibold">
          Home
        </a>
        <a href="#projects" className="hover:font-semibold">
          Projects
        </a>
        <a href="#about" className="hover:font-semibold">
          About
        </a>
        <a href="#contact" className="hover:font-semibold">
          Contact
        </a>
      </section>
    </div>
  )
}
