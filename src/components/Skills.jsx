// src/components/Skills.jsx
const Skills = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-3xl md:text-4xl font-semibold">Skills</h2>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-7 grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-[20px] font-semibold">
              Programming
            </h3>
            <p className="col-span-1 text-[20px]">
              Python, JavaScript, TypeScript
            </p>
            <p className="col-span-1 text-[20px]">Java, C#</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-[20px] font-semibold">
              Web Development
            </h3>
            <p className="col-span-1 text-[20px]">
              Node, Express, React, Redux
            </p>
            <p className="col-span-1 text-[20px]">
              Tailwind, Shadcn, Framer-Motion
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-[20px] font-semibold">Databases</h3>
            <p className="col-span-1 text-[20px]">Postgres, SQL</p>
            <p className="col-span-1 text-[20px]">MongoDB, NoSQL</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-[20px] font-semibold">
              DevOps & Tools
            </h3>
            <p className="col-span-1 text-[20px]">Azure, Firebase, CI/CD</p>
            <p className="col-span-1 text-[20px]">
              Jest, Unit Testing, Git, Github
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-[20px] font-semibold">AI/ML</h3>
            <p className="col-span-1 text-[20px]">
              TensorFlow, PyTorch, Matplotlib
            </p>
            <p className="col-span-1 text-[20px]">
              Numpy, Pandas, NLP, Deep Learning
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-[20px] font-semibold">
              Advanced AI
            </h3>
            <p className="col-span-1 text-[20px]">RNN, LLM, RAGs</p>
            <p className="col-span-1 text-[20px]">LLM Agents, LLM OS</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <h3 className="col-span-1 text-[20px] font-semibold">
              Other Skills
            </h3>
            <p className="col-span-1 text-[20px]">Reading Research Papers</p>
            <p className="col-span-1 text-[20px]">Excel, Typing(+100WPM)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
