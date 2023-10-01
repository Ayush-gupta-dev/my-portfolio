import React from 'react'
import Form from '../components/Contact_Form/Form'

const Contact = () => {
  return (
    <>
    <div className='md:mt-24 flex md:flex-row flex-col justify-center  md:p-12 md:mx-20 p-0 m-0'>
        <div className='md:w-[397px] w-full'>
        <div className=' text-[#f8f8f2] font-bold md:text-5xl text-2xl w-full text-center font-sora'>
        Contact
        </div>
        </div>
        <div className='md:flex-1 w-full'>
        <Form/>
        </div>
    </div>
    </>
  )
}

export default Contact