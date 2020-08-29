import React from 'react'
import Room1 from './images/room1.jpg'
import Room2 from './images/room2.jpg'
import Room3 from './images/room3.jpg'

const Rooms = () => {
  return (
    <div>
     <h1 className="text-center font-semibold text-3xl mt-10">Unique hotels</h1>

     <div className="w-9/12 mx-auto my-10 md:w-full md:flex justify-evenly ">


        <div className="shadow-3xl rounded-2xl overflow-hidden my-10 md:mx-5  flex flex-col hover:-translate-y-1 hover:scale-105 ease-in-out transform transition duration-300 lg:mx-12 xl:mx-20">
          <img className=" object-cover" src={Room1}/>
          <p className="p-2">Capsule hotel in Tokyo</p>
        </div>

        <div className="shadow-3xl rounded-2xl overflow-hidden my-10 md:mx-5  flex flex-col hover:-translate-y-1 hover:scale-105 ease-in-out transform transition duration-300 lg:mx-12 xl:mx-20">
          <img className="object-cover" src={Room2}/>
          <p className="p-2">Luxury hotel in London</p>
        </div>

        <div className="shadow-3xl rounded-2xl overflow-hidden my-10 md:mx-5  flex flex-col hover:-translate-y-1 hover:scale-105 ease-in-out transform transition duration-300 lg:mx-12 xl:mx-20">
          <img className="object-cover" src={Room3}/>
          <p className="p-2">Hotel in the woods in Norway</p>
        </div>


    </div>
  </div>
  )
}

export default Rooms
