import './App.css'
import { Button, ButtonGroup, Divider } from '@nextui-org/react'
import { Fade } from 'react-awesome-reveal'

import Portfolioimage from './assets/portfolio-darlanzero.vercel.app.png'
import Snapgram from './assets/Snapgram.png'
import Spacetime from './assets/Spacetime.png'
import Santander from './assets/Santander-dev-week.png'
import SaintSeiya from './assets/Saint-Seiya.png'
import UploadAI from './assets/Upload-ai.png'
import NlwExport from './assets/NLWWebsite.png'
import Sensidia from './assets/Sensidia.png'
import RefineDashboard from './assets/dashboard-refine.gif'
import { DividerSection, Footer, SlickCard, TextCard, Timeline, Topbar } from './components'

function App() {
  
  return (
    <>
      <Topbar />
        <Fade cascade damping={0.5}>
          <div>
            <div className='items-center flex flex-col flex-1 justify-center' id='about-me'>
              <h1 className='font-bold text-violet-500 p-2 mb-2'>About Me</h1>

              <div>
                <TextCard 
                  caption='Hello, my name is Darlan J. Oliveira, and i am a brazilian dev with currently 3 years of academical experience with programming, including Web Development, Desktop Apps, Mobile Apps and Data Science.'
                />

                <TextCard 
                  caption='I am passionate about technology, and i am always looking for new opportunities to learn and grow. i am also offering my services to clients and partners, but i am currently working as a Employee in a company.'
                />

                <TextCard 
                  caption='Actually i can speak in two languages: English and Portuguese. So i can offer my in many ways to clients and partners.'
                />

                <TextCard 
                  caption='I am always studiyng and learning new things, so if you have any questions or suggestions, feel free to contact me.'
                />
              </div>

              <div className='flex flex-1 flex-col pl-10 items-start'>
                <Timeline 
                  data='Jan. 2021 - Mar. 2022'
                  title='First Step'
                  caption='I started my journey as a developer in 2021, realizing some courses with C#, HTML, mySQL, and other technologies.'
                />

                <Timeline 
                  data='Mar. 2022'
                  title='Graduation'
                  caption='I started my graduation of Computer Science at Estácio de sá in March. 2022.'
                />

                <Timeline 
                  data='Jul. 2022 - Aug. 2022'
                  title='Data Science internship'
                  caption='I made my first step working with technology with Data Science, using PowerBI and Excel for data treatment.'
                />

                <Timeline 
                  data='Nov. 2022 - Nov. 2023'
                  title='IT Support Intern'
                  caption='I worked on a Hospital as a IT Support Intern for one year. I worked fixing the hardware and software of the hospital, and helping the employees.'
                />

                <Timeline 
                  data='Nov. 2023 - Present'
                  title='Full Stack Developer Intern'
                  caption='I am currently working as a Full Stack Developer. I am working with React, Django, and other technologies. Actually i am also applicing my knowledge in Cloud Computing.'
                />
              </div>
            </div>

            <div className='flex flex-col items-center justify-center flex-1' id='technologies'>
              <h1 className='font-bold text-violet-500 p-2 mb-2'>Technologies</h1>
              <div className='grid grid-cols-1 !items-start gap-10 mb-10'>
                <DividerSection 
                  title='Programming Languages'
                  description='Programming Languages that i actually have experience with.'
                  labels={[
                    {label: 'TypeScript', iconImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
                    {label: 'JavaScript', iconImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
                    {label: 'Python', iconImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
                    {label: 'C#', iconImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'},
                    {label: 'Java', iconImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'},
                  ]}
                />

                <DividerSection 
                  title='Frameworks'
                  description='Frameworks that i actually worked with:'
                  labels={[
                    {label: 'React', iconImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
                    {label: 'Django', iconImage: 'https://github.com/devicons/devicon/blob/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/django/django-plain.svg'},
                    {label: 'Next.js', iconImage: 'https://github.com/devicons/devicon/blob/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nextjs/nextjs-original.svg'},
                    {label: 'SpringBoot' , iconImage: 'https://github.com/devicons/devicon/tree/v2.15.1/icons/springboot/springboot-original.svg'},
                    {label: 'NextUi', iconImage: 'https://github.com/nextui-org/nextui/blob/main/packages/logo/logo.svg'},
                    {label: 'Tailwind', iconImage: 'https://github.com/devicons/devicon/blob/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-original.svg'},
                    {label: 'Angular', iconImage: 'https://github.com/devicons/devicon/blob/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/angularjs/angularjs-original.svg'},
                  ]}
                />

                <DividerSection 
                  title='Work Tools'
                  description='Tools that i actually worked with:'
                  labels={[
                    {label: 'PowerBi' , iconImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg'},
                    {label: 'Jira', iconImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'},
                    {label: 'Git', iconImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},
                    {label: 'Github', iconImage: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'},
                  ]}
                />
              </div>
            </div>

            <div className='items-center flex flex-col flex-1 gap-4 mt-10 justify-center' id='contact'>
              <Divider />
              <h1 className='font-bold text-violet-500 mb-2'>Contact</h1>
              
              <TextCard 
                caption='Right below is my contact information, like my email or WhatsApp, my GitHub and my LinkedIn. So, if you need to contact me or want to deal a new project, feel free to contact me!'
              />

              <div className='gap-2 p-2 max-w-[1400px] flex flex-1 flex-col'>
                  <ButtonGroup variant='ghost' color='primary' className='max-w-xs w-24'>

                    <Button
                     onClick={() => window.open('mailto:darliankeira229@gmail.com')}
                    >
                      Email
                    </Button>

                    <Button
                      onClick={() => window.open('https://api.whatsapp.com/send?phone=5531999459326')}
                    >
                      WhatsApp
                    </Button>

                    <Button
                      onClick={() => window.open('https://www.instagram.com/darlanj.oliveira')}

                    >
                      Instagram
                    </Button>
                  </ButtonGroup>

                  <ButtonGroup variant='ghost' color='secondary' className='max-w-xs w-24'>
                  <Button
                      onClick={() => window.open('https://github.com/DarlanZero')}
                    >
                      Github
                    </Button>

                    <Button
                      onClick={() => window.open('https://www.linkedin.com/in/darlanoliveiradev')}
                    >
                      LinkedIn
                    </Button>

                    <Button
                      onClick={() => window.open('https://twitter.com/DarlanZeroDev')}
                    >
                      Twitter
                    </Button>

                    <Button
                      onClick={() => window.open('https://t.me/DarlanZeroDev')}
                    >
                      Telegram
                    </Button>
                  </ButtonGroup>
              </div>
            </div>

            <div className='items-center flex flex-col flex-1 gap-4 justify-center' id='projects'>
              <h1 className='font-bold text-violet-500'>Projects</h1>
              <h2 className='font-extrabold text-center gap-2 text-emerald-600'>Completed Projects</h2>
              <div className='lg:grid lg:grid-cols-3 items-center'>

                <SlickCard 
                title='Frontend Developer'
                content='A Portfólio Page'
                imageSrc={Portfolioimage}
                imageAlt='Darlanzero'
                externalLink='https://portfolio-darlanzero.vercel.app'
                externalLinkName='Redirect To PortFólio V1.0'
              />

                <SlickCard 
                  title='Spacetime'
                  content='A Social Media App for created with RocketSeat'
                  imageSrc={Spacetime}
                  imageAlt='Spacetime'
                  externalLink='https://spacetime-darlanzero.vercel.app'
                  externalLinkName='Redirect to Spacetime'
                />

                <SlickCard 
                  title='Santander Dev Week'
                  content='A Simple Return cards of the props Card in a template web bank'
                  imageSrc={Santander}
                  imageAlt='Santander Dev Week'
                  externalLink='https://santander-dev-week-zeta.vercel.app'
                  externalLinkName='Redirect to Santander Dev Week'
                />

                <SlickCard 
                  title='Saint Seiya'
                  content='A Website created for a RPG Game'
                  imageSrc={SaintSeiya}
                  imageAlt='Saint Seiya RPG'
                  externalLink='https://saint-seyia-darlanzero.vercel.app/frontpage.html'
                  externalLinkName='Redirect to Saint Seiya Site'
                />

                <SlickCard 
                  title='NLW Export'
                  content='A Landing Page created on 2022 for beginner web development'
                  imageSrc={NlwExport}
                  imageAlt='NLW Export'
                  externalLink='https://nlwesport.netlify.app'
                  externalLinkName='Redirect to NLW Export'
                />

                <SlickCard 
                  title='Sensidia'
                  content='A Website template of a view list of A Shop created with PHP and MySQL.'
                  imageSrc={Sensidia}
                  imageAlt='Sensidia'
                  externalLink='https://sensidia1.000webhostapp.com/index.php'
                  externalLinkName='Redirect to Sensidia'
                />

                <SlickCard 
                  title='Snapgram'
                  content='A Social Media clone for study cases.'
                  imageSrc={Snapgram}
                  imageAlt='Snapgram'
                  externalLink='https://snapgram-blush.vercel.app' 
                  externalLinkName='Redirect To Snapgram'
                />

              </div>

              <h2 className='font-extrabold text-center gap-2 text-cyan-600'>Ongoing Projects</h2>

              <div className='lg:grid lg:grid-cols-3 items-center'>
                  <SlickCard 
                    title='Dashobard refine App'
                    content='A Full-Stack Dashboard application created with Refine and GraphQL using mock-data'
                    imageSrc={RefineDashboard}
                    imageAlt='Refine Dashboard'
                    externalLink='https://github.com/darlanZero/refine-dashboard-app'
                    externalLinkName='Redirect To Refine Dashboard'
                  />

                <SlickCard 
                  title='Upload-ai'
                  content='A Simple File Transcribe App with GPT 3.5-turbo API' 
                  imageSrc={UploadAI}
                  imageAlt='Upload-ai'
                  externalLink='https://upload-ai-eta.vercel.app'
                  externalLinkName='Redirect To Upload-ai'
                />
              </div>
            </div>

            <div className='p-4 gap-4 items-center justify-center text-center flex flex-1 flex-col' id='schedule'>
              <h2 className='font-bold text-violet-500 p-2 mb-2 text-center'>Schedule</h2>

              <TextCard 
                caption='This section is about the clients can contact with me more directly about projects and ideas they have, or if they have any question, they can contact with me on google meet using the google calendar meetings function.'
              />

              <div className='w-full items-center flex text-center justify-center p-4 gap-4'>
                <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2eT3awKqMnruY_qd03CVv7VU2wGfTYcWAZzoq5Qpxmibwpm2n6nnazaoQGt0LBd_p6T2sx5BGh?gv=true" style={{
                  border: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }} width="100%" height="600" />
              </div>
              
            </div>
          </div>
        </Fade>
        <Footer />
    </>

  )
}

export default App
