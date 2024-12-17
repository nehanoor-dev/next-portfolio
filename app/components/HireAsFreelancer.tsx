import React from 'react'


function HireAsFreelancer() {
  return (
    <section className='h-72 bg-gradient-to-r from-pink-500 to-purple-600 
    mt-10 flex flex-col items-center justify-center' id='hire'>
      <a href={'https://www.fiverr.com/nehanoor31'} target='_blank' >
      <button className='border-4 border-yellow-300 text-yellow-300 
      text-lg font-extrabold rounded-3xl px-4 py-2 mx-auto my-auto hover:border-pink-500
      hover:text-pink-500
      '>Hire As Freelancer</button>
      </a>
      <p className='text-yellow-200 mt-10'>Lets collaborate to turn your ideas into reality!</p>
    </section>
  )
}

export default HireAsFreelancer