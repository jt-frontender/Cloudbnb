import React from 'react'

const Bottomnavbar = () => {
  return (
    <div className="bg-gray-200 flex-col md:flex-row flex justify-center text-center md:justify-evenly">

      <div className="py-3 md:p-10  md:text-justify">
        <strong className="underline">About</strong>
        <div className="mt-4 underlined cursor-pointer">- How cloudbnb works</div>
        <div className="mt-2 underlined cursor-pointer">- News</div>
        <div className="mt-2 underlined cursor-pointer">- History</div>
      </div>


      <div className="border-t  md:border-t-0 border-gray-900 py-3 md:p-10  md:text-justify">
        <strong className="underline">Community</strong>
        <div className="mt-4 underlined cursor-pointer">- Cloudbnb magazine</div>

        <div className="mt-2 underlined cursor-pointer">- Facebook groups</div>
      </div>


      <div className="border-t border-gray-900 py-3  md:border-t-0 md:p-10 md:text-justify">
        <strong className="underline">Host</strong>
        <div className="mt-4 underlined cursor-pointer">- Host your home</div>
        <div className="mt-2 underlined cursor-pointer">- Host an experience</div>
        <div className="mt-2 underlined cursor-pointer">- Host an online experience </div>
        <div className="mt-2 underlined cursor-pointer">- Community center</div>
      </div>

    </div>
  )
}

export default Bottomnavbar
