import './App.css'
import SlickCard from './components/SlickCard'
import Topbar from './components/Topbar'
import Portfolioimage from './assets/portfolio-darlanzero.vercel.app.png'
import Snapgram from './assets/Snapgram.png'
import Spacetime from './assets/Spacetime.png'
import Santander from './assets/Santander-dev-week.png'
import SaintSeiya from './assets/Saint-Seiya.png'
import UploadAI from './assets/Upload-ai.png'
import Footer from './components/Footer'
import TextCard from './components/TextCard'

function App() {
  
  return (
    <>
      <Topbar />
        <div>

          <div className='items-center flex flex-col flex-1 justify-center' id='about-me'>
            <h1 className='font-bold text-violet-500 p-2 mb-2'>About Me</h1>

            <div>
              <TextCard 
                caption='Hello, my name is Darlan J. Oliveira, and i am a brazilian dev with currently 3 years of academical experience with programming, including Web Development, Desktop Apps, Mobile Apps and Data Science.'
              />

              <TextCard 
                caption='I am passionate about technology, and i am always looking for new opportunities to learn and grow. i am also offering my services to clients and partners, but i am currently working as a Employee in a company'
              />
            </div>
          </div>

          <div className='items-center flex flex-col flex-1 justify-center' id='projects'>
            <h1 className='font-bold text-violet-500'>Projects</h1>
            <h2 className='font-extrabold text-center gap-2 text-emerald-600'>Completed Projects</h2>
            <div className='grid grid-cols-3 items-center'>

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
            </div>

            <h2 className='font-extrabold text-center gap-2 text-cyan-600'>Ongoing Projects</h2>

            <div className='grid grid-cols-3 items-center'>

              <SlickCard 
                title='Snapgram'
                content='A Social Media clone for study cases.'
                imageSrc={Snapgram}
                imageAlt='Snapgram'
                externalLink='https://snapgram-blush.vercel.app' 
                externalLinkName='Redirect To Snapgram'
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

          <div id='technologies'>
            <h1>Technologies</h1>
          </div>
        </div>

        <Footer />
    </>

  )
}

export default App
