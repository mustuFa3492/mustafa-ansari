import About from "./About";
import Contact from "./Contact";

export default function OtherSections() {
  return (
    <main className="flex flex-col">
      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
