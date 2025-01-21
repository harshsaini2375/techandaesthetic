import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='navbar  sticky top-0 bg-white z-10 flex flex-col md:flex-row justify-between items-start md:items-center py-1 md:py-0 h-fit md:h-[50px] px-2 md:px-20'>
      <div className="logoname ">
        <Link className='flex gap-1 md:gap-4 items-center justify-center' href={"/"}>
          <div className="logo relative h-5 w-5 md:h-10 md:w-10">
            <Image className='absolute object-contain' src={"/logo1.png"} alt='logo' fill={true} />
          </div>
          <h2 > Ingoude Company </h2>
        </Link>
      </div>
      <ul className='flex w-full md:w-fit justify-between md:justify-center items-center  md:gap-20'>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/service"}>Services</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><Link href={"/contact"}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
