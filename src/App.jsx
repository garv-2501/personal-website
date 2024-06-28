import "./index.css";

const App = () => {
  return (
    <div className="font-mono mx-auto">
      {/* navigation bar */}
      <nav className="w-full flex justify-end pt-14">
        <a href="#" className="text-2xl">
          Night
        </a>
      </nav>

      {/* hero section */}
      <section className="hero flex flex-col justify-end">
        <div className="pb-24 pr-6 md:pr-16 lg:pr-60">
          <h1 className="text-4xl md:text-6xl lg:text-9xl mb-2 leading-tight">
            Garv Rawlot
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-75">
            Software Developer, AI Researcher, Designer, Open-Source Advocate.
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl mb-12">
            <span className="opacity-50">&lt;h2&gt;</span> I&apos;m Garv Rawlot,
            an award-winning multidisciplinary designer based in San Francisco,
            with a focus on accessibility and a love of creative quirk.{" "}
            <span className="opacity-50">&lt;/h2&gt;</span>
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="#"
              className="text-xl md:text-2xl bg-gray-600 text-white border border-gray-600 px-4 py-2"
            >
              Medium
            </a>
            <a
              href="#"
              className="text-xl md:text-2xl bg-blue-800 text-white border border-blue-800 px-4 py-2"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-xl md:text-2xl bg-gray-900 text-white border border-gray-900 px-4 py-2"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <main className="w-full">
        <section className="py-20">
          <div className="border-t border-gray-400 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <h2 className="text-xl md:text-2xl font-semibold">About</h2>
            </div>
            <div className="col-span-1 grid grid-rows-3 gap-4">
              <div className="grid grid-cols-2 gap-4 border-b border-gray-400 pb-4">
                <h3 className="text-l font-semibold">Philosophy</h3>
                <p>
                  Ego has no place in the design process. Fail quickly to
                  succeed quickly. Negative feedback is a gift. Universal and
                  accessible design is ethical design...
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b border-gray-400 pb-4">
                <h3 className="text-l font-semibold">Motivation</h3>
                <p>
                  Tackling complex problems. Building consensus and momentum
                  towards a shared vision. Empowering non-designers to provide
                  confident, actionable feedback...
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b border-gray-400 pb-4">
                <h3 className="text-l font-semibold">Background</h3>
                <p>
                  Ten years of experience with two boutique web design firms and
                  a full-service digital advertising agency. Higher-ed, museums
                  and archives, non-profits, research and policy...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
