// src/components/About.jsx
const About = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-3xl md:text-4xl font-semibold">About</h2>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-7 grid grid-rows-3 gap-4">
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-2 md:col-span-2 lg:col-span-3 text-[20px] font-semibold">
              Philosophy
            </h3>
            <p className="col-span-2 md:col-span-3 lg:col-span-7 text-[20px]">
              Ego has no place in the design process. Fail quickly to succeed
              quickly. Negative feedback is a gift. Universal and accessible
              design is ethical design...
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-2 md:col-span-2 lg:col-span-3 text-[20px] font-semibold">
              Motivation
            </h3>
            <p className="col-span-2 md:col-span-3 lg:col-span-7 text-[20px]">
              Tackling complex problems. Building consensus and momentum towards
              a shared vision. Empowering non-designers to provide confident,
              actionable feedback...
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            <h3 className="col-span-2 md:col-span-2 lg:col-span-3 text-[20px] font-semibold">
              Background
            </h3>
            <p className="col-span-2 md:col-span-3 lg:col-span-7 text-[20px]">
              Ten years of experience with two boutique web design firms and a
              full-service digital advertising agency. Higher-ed, museums and
              archives, non-profits, research and policy...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
