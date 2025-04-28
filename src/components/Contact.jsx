// src/components/Contact.jsx

const Contact = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
        {/* Section title */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Contact
          </h2>
        </div>

        {/* Contact details */}
        <div className="col-span-1 md:col-span-3 lg:col-span-7 grid gap-4">
          {/* Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Email
            </h3>
            <a
              href="mailto:garv.s.rawlot@gmail.com"
              className="
                  col-span-1
                  text-lg font-medium font-mono
                  text-indigo-600 dark:text-indigo-400
                  hover:underline underline-offset-2
                  transition-colors duration-150
                "
            >
              garv.s.rawlot@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <h3 className="col-span-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/garv-singh-rawlot"
              target="_blank"
              rel="noopener noreferrer"
              className="
                  col-span-1
                  text-lg font-medium font-mono
                  text-indigo-600 dark:text-indigo-400
                  hover:underline underline-offset-2
                  transition-colors duration-150
                "
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
