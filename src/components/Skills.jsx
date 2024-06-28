// src/components/Skills.jsx
const Skills = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-2xl md:text-2xl font-semibold">Skills</h2>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-7 grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-lg font-semibold">Programming</h3>
            <p className="col-span-1 text-lg">Python, JavaScript, TypeScript</p>
            <p className="col-span-1 text-lg">Java, C#</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-lg font-semibold">
              Web Development
            </h3>
            <p className="col-span-1 text-lg">Node, Express, React, Redux</p>
            <p className="col-span-1 text-lg">
              Tailwind, Shadcn, Framer-Motion
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-lg font-semibold">Databases</h3>
            <p className="col-span-1 text-lg">Postgres, SQL</p>
            <p className="col-span-1 text-lg">MongoDB, NoSQL</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-lg font-semibold">DevOps & Tools</h3>
            <p className="col-span-1 text-lg">Azure, Firebase, CI/CD</p>
            <p className="col-span-1 text-lg">
              Jest, Unit Testing, Git, Github
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-lg font-semibold">AI/ML</h3>
            <p className="col-span-1 text-lg">
              TensorFlow, PyTorch, Matplotlib
            </p>
            <p className="col-span-1 text-lg">
              Numpy, Pandas, NLP, Deep Learning
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-lg font-semibold">Advanced AI</h3>
            <p className="col-span-1 text-lg">RNN, LLM, RAGs</p>
            <p className="col-span-1 text-lg">LLM Agents, LLM OS</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <h3 className="col-span-1 text-lg font-semibold">Other Skills</h3>
            <p className="col-span-1 text-lg">Reading Research Papers</p>
            <p className="col-span-1 text-lg">Excel, Typing(+100WPM)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
