import React from 'react'
import { FiMail } from "react-icons/fi";
import { FaGithub,FaTwitter,FaLinkedin, FaExternalLinkSquareAlt, FaEnvelopeSquare } from "react-icons/fa";
import Hashnode from './assets/hashnode.png'
const SocialLink = () => {
  return (
    <>
    <div className='flex flex-row w-full justify-center mt-5 text-slate-500 space-x-4'>
    <a href="https://www.linkedin.com/in/ayush-gupta-dev/" target="_blank" className='hover:text-white'  >
        <FaLinkedin size={30}/>
    </a>
    <a href="https://github.com/Ayush-gupta-dev"target="_blank"className='hover:text-white' >
        <FaGithub size={30}/>
    </a>
    <a href="https://twitter.com/madmecodes"target="_blank" className='hover:text-white'  >
        <FaTwitter size={30}/>
    </a>
    {/* <a href="mailto:ayushguptadev1@gmail.com" >
        <FiMail size={30}/>
    </a> */}
      <a href="https://bio.link/ayushbio" target="_blank" className='hover:text-white' >
        <FaExternalLinkSquareAlt size={30}/>
    </a>
    </div>
    </>
  )
}

export default SocialLink