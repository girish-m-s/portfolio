const certifications = [
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
  },
  {
    name: 'Informatica CDI R41 Professional Certification',
    issuer: 'Informatica',
    year: '2024',
  },
  {
    name: 'IBM Data Science Professional Certificate',
    issuer: 'IBM',
    year: '2024',
  },
  {
    name: 'Applied Data Science Capstone Specialization',
    issuer: 'Coursera',
    year: '2024',
  },
  {
    name: 'DataBricks Fundamentals',
    issuer: 'Databricks',
    year: '2024',
  },
  {
    name: 'Intel AI Specialization',
    issuer: 'Intel',
    year: '2024',
  },
];

const awards = [
  {
    name: 'MVP Award',
    organization: 'Informatica',
    year: '2024',
  },
  {
    name: 'PC Admin Certification',
    organization: 'Informatica',
    year: '2024',
  },
  {
    name: 'Volvo Recognition Award',
    organization: 'Volvo',
    year: '2024',
  },
  {
    name: 'Texpo Certificate',
    organization: 'Tech Expo',
    year: '2024',
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Certifications and awards"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Certifications & Awards
        </h2>
      </div>
      <div>
        {/* View All Certifications Button */}
        <div className="mb-8">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-primary-400/10 px-6 py-3 font-medium text-primary-300 hover:bg-primary-400/20 hover:text-primary-200 transition-colors"
            href="https://drive.google.com/drive/folders/1hwor0-lV6ComKdMNzPTSrr2ry-9pcZFu?usp=drive_link"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View all certifications and awards (opens in a new tab)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
            </svg>
            <span>View All Certifications & Awards</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="mb-6 text-base font-semibold text-slate-200">Certifications</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <li key={index} className="group relative">
                <div className="absolute -inset-x-2 -inset-y-2 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50"></div>
                <div className="relative z-10 rounded-lg border border-slate-700/50 bg-slate-800/50 p-4 hover:border-slate-600 transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-medium text-slate-200 text-sm">{cert.name}</h4>
                      <p className="mt-1 text-xs text-slate-400">{cert.issuer}</p>
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-slate-500">{cert.year}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Awards */}
        <div>
          <h3 className="mb-6 text-base font-semibold text-slate-200">Awards & Recognition</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {awards.map((award, index) => (
              <li key={index} className="group relative">
                <div className="absolute -inset-x-2 -inset-y-2 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-slate-800/50"></div>
                <div className="relative z-10 rounded-lg border border-slate-700/50 bg-slate-800/50 p-4 hover:border-slate-600 transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-medium text-slate-200 text-sm">{award.name}</h4>
                      <p className="mt-1 text-xs text-slate-400">{award.organization}</p>
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-slate-500">{award.year}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

