import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='w-full h-screen'>
    <div className="absolute z-10 w-full h-full top-0 right-0">
        <Image
            src="/one.jpg"
            layout="fill"
            objectFit="cover"
            alt='background image'
            quality={100}
        />
    </div>
        
    </div>
  )
}

export default Home