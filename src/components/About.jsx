// src/components/About.jsx
const About = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            About
          </h2>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-7 grid grid-rows-3 gap-4">
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-2 md:col-span-2 lg:col-span-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Motivation
            </h3>
            <p className="col-span-2 md:col-span-3 lg:col-span-7 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              My love lies in building systems, whether it&apos;s a business, a
              piece of software, or just everyday life. Seeing complex parts
              come together to create something meaningful is exciting. This
              passion for creating and solving is at the heart of everything I
              do.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-2 md:col-span-2 lg:col-span-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Background
            </h3>
            <p className="col-span-2 md:col-span-3 lg:col-span-7 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I&apos;ve been tinkering with technology since I was a kid and
              have been programming for about nine years now. From developing a
              startup and leading a tech society to writing my research paper, I
              try to embrace every opportunity to learn something new each day.
              It&apos;s this journey that keeps my passion for tech alive.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            <h3 className="col-span-2 md:col-span-2 lg:col-span-3 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Philosophy
            </h3>
            <p className="col-span-2 md:col-span-3 lg:col-span-7 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I believe we are the universe&apos;s introspective gaze,
              consciousness born from dust in its quest for self-understanding.
              Innately we are born explorers, driven to find the unknown and
              unravel the mysteries that connect us all. This journey of
              discovery is what makes life truly meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
