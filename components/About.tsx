export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          I&apos;m a passionate Machine Learning Engineer and Data Engineer with expertise in building{' '}
          <span className="font-medium text-slate-200">intelligent AI systems</span> and{' '}
          <span className="font-medium text-slate-200">scalable data pipelines</span>. My work focuses on transforming complex data into actionable insights and deploying production-ready ML solutions.
        </p>
        <p className="mb-4">
          Currently, I specialize in{' '}
          <span className="font-medium text-slate-200">Large Language Models (LLMs)</span>,{' '}
          <span className="font-medium text-slate-200">Natural Language Processing</span>, and{' '}
          <span className="font-medium text-slate-200">MLOps</span>. I have extensive experience with cloud platforms (AWS, Azure), building data engineering solutions with technologies like{' '}
          <span className="font-medium text-slate-200">Apache Spark</span>,{' '}
          <span className="font-medium text-slate-200">Databricks</span>, and{' '}
          <span className="font-medium text-slate-200">Informatica</span>.
        </p>
        <p className="mb-4">
          My expertise spans the full ML lifecycle: from data engineering and model development to deployment and monitoring. I&apos;ve worked on projects involving predictive modeling, computer vision, recommendation systems, and generative AI applications.
        </p>
        <p>
          When I&apos;m not coding, you can find me exploring the latest advancements in AI research, contributing to open-source projects, or sharing knowledge through technical writing and mentoring.
        </p>
      </div>
    </section>
  );
}

