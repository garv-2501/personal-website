// src/components/Skills.jsx
const Skills = () => {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Skills
          </h2>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-7 grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Programming
            </h3>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Python, JavaScript, TypeScript
            </p>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Java, C#
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Web Development
            </h3>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Node, Express, React, Redux
            </p>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Tailwind, Shadcn, Framer-Motion
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Databases
            </h3>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Postgres, SQL
            </p>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              MongoDB, NoSQL
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              DevOps & Tools
            </h3>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Azure, Firebase, CI/CD
            </p>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Jest, Unit Testing, Git, Github
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              AI/ML
            </h3>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              TensorFlow, PyTorch, Matplotlib
            </p>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Numpy, Pandas, NLP, Deep Learning
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-b border-gray-400 pb-4">
            <h3 className="col-span-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Advanced AI
            </h3>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              RNN, LLM, RAGs
            </p>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              LLM Agents, LLM OS
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <h3 className="col-span-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Other Skills
            </h3>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Reading Research Papers
            </p>
            <p className="col-span-1 text-lg font-medium text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Excel, Typing(+100WPM)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
