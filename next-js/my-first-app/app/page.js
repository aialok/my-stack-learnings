import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className=''>
      <h1 className='text-7xl'>Home Page</h1>
      <Link href='/about' className='text-2xl'>
         About Page
      </Link>
    </div>
  )
}

export default HomePage