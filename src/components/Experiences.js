import React from 'react'
import Exp1  from './images/exp1.jpg'
import Exp2  from './images/exp2.jpg'
import Exp3  from './images/exp3.jpg'


const Experiences = () => {
  return (
    <div>
       <h1 className="text-center font-semibold text-3xl mt-10">Amazing experiences</h1>
        <div className="w-9/12 mx-auto my-10 md:w-full md:flex justify-evenly ">


        <div className="shadow-3xl rounded-2xl overflow-hidden my-10 md:mx-5 lg:mx-12 xl:mx-20 flex flex-col hover:-translate-y-1 hover:scale-105 ease-in-out transform transition duration-300">
          <img className=" object-cover" src={Exp1}/>
          <p className="p-2">Forest bike riding</p>
        </div>

        <div className="shadow-3xl rounded-2xl overflow-hidden my-10 md:mx-5  flex flex-col hover:-translate-y-1 hover:scale-105 ease-in-out transform transition duration-300 lg:mx-12 xl:mx-20">
          <img className="object-cover" src={Exp2}/>
          <p className="p-2">Fine dining</p>
        </div>


        <div className="shadow-3xl rounded-2xl overflow-hidden my-10 md:mx-5  flex flex-col hover:-translate-y-1 hover:scale-105 ease-in-out transform transition duration-300 lg:mx-12 xl:mx-20">
          <img className="object-cover" src={Exp3}/>
          <p className="p-2">Library cafe</p>
        </div>


    </div>
  </div>
  )
}

export default Experiences
