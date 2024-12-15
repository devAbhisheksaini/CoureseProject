import React from 'react'
import {FaHeart} from "react-icons/fa"

const Footdata = () => {
  return (
    <div >
      <div className="fixed bottom-0 w-full bg-gray-800 text-white text-end p-2 flex items-center justify-end">
        <FaHeart fontSize="0.75rem" className="mr-1 text-red-500" />
        <span className="font-light">~Abhi</span>
      </div>
    </div>
  )
}

export default Footdata
