import React, { useState } from 'react'
import Cloud from './images/cloudbnb.png'
import Menu from './images/menu.png'
import Close from './images/close.png'
import '../assets/normal.css'

const Navbar = () => {

const [hamburger, setHamburger] = useState('md:hidden')
const [cross, setCross] = useState("hidden")
const [nav, setNav]  = useState("hidden")

const showslidingnav = () => {

setNav("fixed")
setHamburger("hidden")
setCross("block")

}

const closeslidingnav = () => {

  setNav("hidden")
  setHamburger("block")
  setCross("hidden")

}

  return (
    
   <div className="flex justify-between"> 

    <div className="h-30 flex p-4 cursor-pointer">
      <img className="h-12" src={Cloud}/>
      <div className="text-xl mt-3">cloudbnb</div>
    </div>

    <div className="flex align-middle p-4 justify-between md:w-8/12 my-auto">

      <img 
      onClick={showslidingnav} 
      className={`h-8 align-middle self-center md:hidden ${hamburger} cursor-pointer`} 
      src={Menu}/>

      <img 
      onClick={closeslidingnav}
      className={`h-8 align-middle self-center ${cross} md:hidden cursor-pointer`} 
      src={Close}/>

     <div className="hidden md:flex justify-around w-full"> 
        <div className="cursor-pointer underlined">Hotels</div>
        <div className="cursor-pointer underlined">Experiences</div>
        <div className="cursor-pointer underlined">Host with us</div>
        <div className="cursor-pointer underlined">Articles</div>
     </div> 

    </div>

    <div className={`fixed bg-gray-200 min-h-full w-8/12 text-center ${nav} transition-opacity ease-in-out duration-500 opacity-90 z-40`}>
      <div className="flex flex-col align-evenly"> 
        <div className="my-16 mt-24 cursor-pointer">Hotels</div>
        <div className="my-16 cursor-pointer" >Experiences</div>
        <div className="my-16 cursor-pointer" >Host with us</div>
        <div className="my-16 cursor-pointer" >Articles</div>
      </div>  
    </div>  

  </div>
  )
}

export default Navbar
