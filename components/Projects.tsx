const projects = [
  {
    title: 'AI-Powered Chatbot with RAG',
    description:
      'Built an intelligent conversational AI system using Retrieval-Augmented Generation (RAG) with LangChain and OpenAI. Implemented vector databases for efficient document retrieval and context-aware responses. Deployed on AWS with scalable infrastructure handling 1000+ daily queries.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'Docker', 'AWS'],
    link: '#',
    image: '/projects/chatbot.jpg',
  },
  {
    title: 'Real-time Data Pipeline',
    description:
      'Designed and implemented a real-time data processing pipeline using Apache Kafka and Spark Streaming. Processed millions of events per day with sub-second latency. Built monitoring dashboards and alerting systems for pipeline health.',
    technologies: ['Apache Kafka', 'Spark Streaming', 'AWS', 'Python', 'Scala', 'Grafana'],
    link: '#',
    image: '/projects/pipeline.jpg',
  },
  {
    title: 'Computer Vision for Quality Control',
    description:
      'Developed a deep learning model for automated defect detection in manufacturing. Achieved 98% accuracy using custom CNN architecture. Reduced quality inspection time by 75% and deployed to edge devices for real-time processing.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'ONNX', 'Flask', 'Raspberry Pi'],
    link: '#',
    image: '/projects/vision.jpg',
  },
  {
    title: 'Recommendation Engine',
    description:
      'Built a hybrid recommendation system combining collaborative filtering and content-based approaches. Implemented using matrix factorization and neural networks. Increased user engagement by 40% and improved click-through rates.',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Redis', 'PostgreSQL', 'Docker'],
    link: '#',
    image: '/projects/recommendation.jpg',
  },
  {
    title: 'NLP Sentiment Analysis Platform',
    description:
      'Created a multi-language sentiment analysis system for social media monitoring. Fine-tuned BERT models for domain-specific classification. Processed 100K+ posts daily with real-time sentiment tracking and trend analysis.',
    technologies: ['Python', 'Transformers', 'BERT', 'FastAPI', 'MongoDB', 'Kubernetes'],
    link: '#',
    image: '/projects/nlp.jpg',
  },
  {
    title: 'MLOps Platform',
    description:
      'Established end-to-end MLOps infrastructure for model training, deployment, and monitoring. Implemented CI/CD pipelines for ML models with automated testing and validation. Reduced model deployment time from weeks to hours.',
    technologies: ['MLflow', 'Kubeflow', 'Jenkins', 'Docker', 'Kubernetes', 'AWS', 'Python'],
    link: '#',
    image: '/projects/mlops.jpg',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-primary-300 focus-visible:text-primary-300 group/link text-base"
                      href={project.link}
                      aria-label={project.title}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}
                        <span className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{project.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-primary-400/10 px-3 py-1 text-xs font-medium leading-5 text-primary-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="z-10 sm:order-1 sm:col-span-2">
                  <div className="mt-2 text-sm font-semibold leading-snug text-slate-500">
                    Featured Project
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-primary-300 focus-visible:text-primary-300 group/link text-base"
            href="https://github.com/girish-m-s"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Project Archive on GitHub (opens in a new tab)"
          >
            <span>
              View Full{' '}
              <span className="inline-block">
                Project Archive
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

