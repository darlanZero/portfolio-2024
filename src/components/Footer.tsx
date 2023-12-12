
import { Image } from '@nextui-org/react'
import Linkedin from '../assets/linkedin.svg'
import Twitter from '../assets/twitter-alt.svg'
import Instagram from '../assets/instagram.svg'
import Github from '../assets/github.svg'

const Footer = () => {
  return (
    <div className='flex flex-col'>
        <footer className='bg-gray-950'>
            <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex justify-between'>
                <div className="items-center">
                    <p className='text-center text-gray-300'>© 2023 - {new Date().getFullYear()} Darlanzero. All rights reserved.</p>   
                </div>

                <div className='bg-green-400 p-4 rounded-md'>
                    <h2 className="mb-6 text-sm font-bold text-black  uppercase">Socials</h2>

                    <ul className=" flex flex-1 justify-between gap-4">
                        <li>
                            <a href="https://github.com/Darlanzero" target="_blank" className="hover:underline hover:text-purple-600">
                                <Image 
                                    src={Github}
                                    height={25}
                                    width={25}
                                    className='hover:cursor-pointer'
                                />
                            </a>
                        </li>

                        <li>
                            <a href="https://twitter.com/DarlanZeroDev" target="_blank" className="hover:underline hover:text-purple-600">
                                <Image 
                                    src={Twitter}
                                    height={25}
                                    width={25}
                                    className='hover:cursor-pointer'
                                />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/darlanoliveiradev/" target="_blank" className="hover:underline hover:text-purple-600">
                                <Image 
                                    src={Linkedin} 
                                    height={25}
                                    width={25}
                                    className='hover:cursor-pointer'
                                />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/darlanj.oliveira/" target="_blank" className="hover:underline hover:text-purple-600">
                                <Image 
                                    src={Instagram}
                                    height={25}
                                    width={25}
                                    className='hover:cursor-pointer'
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
