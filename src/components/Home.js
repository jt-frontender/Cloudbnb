import React from 'react'
import Cloud from './images/cloud.jpg'

const Home = () => {



  return (
    <div>
    
      <div 
      className="py-40 lg:py-56 text-center" 
      style={{ backgroundImage: `url(${Cloud})`, backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

         <div 
         className="bg-white w-5/12 mx-auto rounded-lg p-5 shadow-2xl md:w-3/12 border border-gray-800 cursor-pointer underlined"
         >Check availability
         </div>

      </div>
      
    </div>
  )
}

export default Home
