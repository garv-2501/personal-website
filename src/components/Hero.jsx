// src/components/Hero.jsx
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  const nameWords = "Garv Rawlot";

  return (
    <section className="hero flex flex-col justify-end lg:h-[94vh] md:h-[90vh] h-[94vh]">
      <div className="pb-20 pr-6 md:pr-16 lg:pr-60">
        <h1 className="text-5xl md:text-7xl lg:text-9xl mb-2 leading-tight font-semibold">
          <TextGenerateEffect
            words={nameWords}
            className="text-5xl md:text-7xl lg:text-9xl leading-tight font-semibold"
          />
        </h1>
        <p className="text-base md:text-lg mb-6 opacity-75 font-semibold">
          Software Developer, AI Researcher, Designer, Open-Source Advocate.
        </p>
        <p className="text-lg md:text-xl lg:text-3xl mb-12 font-semibold">
          <span className="opacity-50">&lt;h2&gt;</span> 👋 I&apos;m Garv
          Rawlot, a Software Developer from London. I specialize in the
          application and research of artificial intelligence technologies.
          <span className="opacity-50">&lt;/h2&gt;</span>
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          <a
            href="https://garv-rawlot.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl bg-green-600 text-white border border-green-600 hover:bg-green-500 px-6 py-3 rounded-full"
          >
            Medium
          </a>
          <a
            href="https://www.linkedin.com/in/garv-singh-rawlot/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl bg-blue-800 text-white border border-blue-800 hover:bg-blue-700 px-6 py-3 rounded-full"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/garv-2501"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl bg-gray-900 text-white border border-gray-900 hover:bg-gray-700 px-6 py-3 rounded-full"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
