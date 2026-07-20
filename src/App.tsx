import './App.css'

type IconName = 'arrow' | 'github' | 'linkedin' | 'mail' | 'code' | 'layers' | 'spark' | 'external'

const Icon = ({ name, size = 20 }: { name: IconName; size?: number }) => {
  const paths: Record<IconName, JSX.Element> = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.1.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5-.1 3.9.5 3.9.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><path d="M2 9h4v12H2z"/><path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></>,
    spark: <><path d="m12 3-1.6 4.4L6 9l4.4 1.6L12 15l1.6-4.4L18 9l-4.4-1.6L12 3z"/><path d="M5 16l-.8 2.2L2 19l2.2.8L5 22l.8-2.2L8 19l-2.2-.8L5 16z"/></>,
    external: <><path d="M15 3h6v6"/><path d="m10 14 11-11"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
  }

  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

const projects = [
  {
    number: '01',
    title: 'Star Translator',
    category: 'Desktop · Open source',
    description: 'A .NET desktop workspace for managing game translation projects, strings, validation and engine-specific workflows.',
    stack: ['C#', '.NET', 'Desktop'],
    link: 'https://github.com/StarsFord/star-translator',
    tone: 'violet',
  },
  {
    number: '02',
    title: 'StarsRemote',
    category: 'Product · Cross-platform',
    description: 'A privacy-conscious, customizable remote gaming platform built around desktop and mobile clients.',
    stack: ['Flutter', 'C#', 'Streaming'],
    link: 'https://github.com/StarsFord/StarsRemote',
    tone: 'mint',
  },
  {
    number: '03',
    title: 'StarsTranslation',
    category: 'Full stack · Platform',
    description: 'A publishing platform for game and visual novel translations with roles, versions, comments, notifications and file delivery.',
    stack: ['Next.js', 'TypeScript', 'Auth'],
    link: 'https://github.com/StarsFord/StarsTranslation-Website',
    tone: 'amber',
  },
  {
    number: '04',
    title: 'RPG Auto Decryptor',
    category: 'Mobile · Tooling',
    description: 'An Android app that analyzes RPG Maker APKs, detects encryption keys and processes encrypted game assets.',
    stack: ['Flutter', 'Dart', 'Kotlin'],
    link: 'https://github.com/darlanZero/rpg_decryptor_flutter',
    tone: 'coral',
  },
  {
    number: '05',
    title: 'RPG Maker Toolkit',
    category: 'Automation · CLI',
    description: 'A diagnostic and file-processing toolkit for backups, Live2D asset restoration and RPG Maker MV/MZ projects.',
    stack: ['Python', 'Automation', 'CLI'],
    link: 'https://github.com/darlanZero/Rpgmaker-Toolkit',
    tone: 'blue',
  },
  {
    number: '06',
    title: 'Salvazap',
    category: 'Frontend · Integration',
    description: 'A responsive frontend for the WhatsApp Business ecosystem with validated forms and asynchronous data management.',
    stack: ['Next.js', 'TypeScript', 'Zod'],
    link: 'https://github.com/darlanZero/whatsapp-business-front',
    tone: 'lime',
  },
]

const experience = [
  {
    period: '2025 — now',
    role: 'Systems Analyst',
    company: 'Advocacia-Geral do Estado de Minas Gerais',
    detail: 'Internal systems, automation ownership, external platform support and engineering standards across C#, Node.js, Python and PHP.',
  },
  {
    period: '2025 — now',
    role: 'Founder',
    company: 'StarsFord',
    detail: 'Building open-source products for game developers, translators, localization teams and players.',
  },
  {
    period: '2024 — 2025',
    role: 'Digital Intelligence Intern',
    company: 'Wabtec Corporation',
    detail: 'REST APIs with C#/.NET, AngularJS integrations, software quality and agile product delivery.',
  },
  {
    period: '2023 — 2024',
    role: 'Data Analysis & Full Stack Intern',
    company: 'ARSAE-MG',
    detail: 'React, TypeScript and Django applications supporting data-intensive public-service workflows.',
  },
]

const stack = [
  { label: 'Frontend', values: 'TypeScript · React · Next.js · Angular · Tailwind CSS' },
  { label: 'Backend', values: 'C# · .NET · Node.js · Java · Spring Boot · Python' },
  { label: 'Mobile', values: 'Flutter · Dart · Kotlin · Android' },
  { label: 'Data & tools', values: 'MySQL · PostgreSQL · Firebase · Git · Docker' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Darlan Oliveira — home">
          <span className="brand-mark">DZ</span>
          <span>Darlan Oliveira</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="nav-contact" href="mailto:darliankeira229@gmail.com">Let's talk <Icon name="arrow" size={17} /></a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Full stack developer · Systems analyst</p>
            <h1>I turn complex<br />problems into <em>clear</em><br />digital products.</h1>
            <p className="hero-lede">From polished interfaces to APIs, automation and cross-platform apps — I design and build software that makes real workflows simpler.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore my work <Icon name="arrow" size={18} /></a>
              <a className="text-link" href="https://github.com/darlanZero" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub profile</a>
            </div>
          </div>

          <div className="hero-visual reveal" aria-label="Portrait of Darlan Oliveira">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="portrait-frame">
              <img src="https://github.com/darlanZero.png" alt="Darlan Oliveira" />
            </div>
            <div className="availability"><span /> Available for selected projects</div>
            <div className="visual-note note-top">Based in<br /><strong>Minas Gerais, BR</strong></div>
            <div className="visual-note note-bottom"><strong>4+ years</strong><br />building software</div>
          </div>

          <a className="scroll-cue" href="#about"><span>Scroll to discover</span><i /></a>
        </section>

        <section className="intro section" id="about">
          <div className="section-label"><span>01</span> About</div>
          <div className="intro-content">
            <h2>Software is most valuable when it feels <em>obvious</em> to the people using it.</h2>
            <div className="intro-grid">
              <p>I'm Darlan J. Oliveira, also known as DarlanZero. I work across the full product stack — investigating a problem, shaping the architecture and delivering the interface, services and integrations behind it.</p>
              <p>Today, I build internal systems and automations as a Systems Analyst at AGE-MG and lead StarsFord, where I create practical tools for the gaming and localization ecosystem.</p>
            </div>
            <div className="principles">
              <article><Icon name="code" /><strong>End-to-end</strong><span>Interfaces, APIs, data and delivery considered as one product.</span></article>
              <article><Icon name="layers" /><strong>Pragmatic architecture</strong><span>Clean foundations without adding complexity that the problem doesn't need.</span></article>
              <article><Icon name="spark" /><strong>Thoughtful experience</strong><span>Reliable software with details that make everyday use feel effortless.</span></article>
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-heading">
            <div className="section-label"><span>02</span> Selected work</div>
            <div>
              <h2>Products with purpose.</h2>
              <p>A selection of recent projects across desktop, web, mobile and automation.</p>
            </div>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a className={`project-card ${project.tone}`} href={project.link} target="_blank" rel="noreferrer" key={project.title}>
                <div className="project-top"><span>{project.number}</span><Icon name="external" size={19} /></div>
                <div className="project-art" aria-hidden="true"><i /><b>{project.title.slice(0, 2).toUpperCase()}</b></div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </a>
            ))}
          </div>
          <a className="all-projects" href="https://github.com/darlanZero?tab=repositories" target="_blank" rel="noreferrer">View all repositories <Icon name="arrow" size={18} /></a>
        </section>

        <section className="experience section" id="experience">
          <div className="section-label"><span>03</span> Experience</div>
          <div className="experience-content">
            <div className="experience-heading">
              <h2>Learning by building,<br />growing by <em>shipping.</em></h2>
              <p>My path spans public service, industrial technology, data and product development.</p>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article key={`${item.company}-${item.role}`}>
                  <time>{item.period}</time>
                  <div><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.detail}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stack section" id="stack">
          <div className="section-label"><span>04</span> Toolkit</div>
          <div className="stack-content">
            <div><h2>Broad enough to connect the dots. <em>Focused enough to deliver.</em></h2><p>Tools change. Strong engineering fundamentals and the ability to adapt remain.</p></div>
            <div className="stack-list">
              {stack.map((item) => <article key={item.label}><span>{item.label}</span><p>{item.values}</p></article>)}
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="eyebrow"><span /> Have a project or an interesting challenge?</p>
          <h2>Let's build something<br /><em>useful together.</em></h2>
          <p className="contact-copy">I'm open to collaborations, freelance projects and conversations about technology.</p>
          <div className="contact-actions">
            <a className="button light" href="mailto:darliankeira229@gmail.com"><Icon name="mail" /> Send an email</a>
            <a className="social-button" href="https://www.linkedin.com/in/darlanoliveiradev" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
            <a className="social-button" href="https://github.com/darlanZero" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">DZ</span><span>Darlan Oliveira</span></a>
        <p>© {new Date().getFullYear()} · Designed & built with intention.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
