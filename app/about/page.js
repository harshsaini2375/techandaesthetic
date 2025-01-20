import React from 'react'
import Navbar from '../Components/Navbar'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="vision md:flex">
        <div className="left h-[91vh] md:h-[93vh] w-[70vw]  md:w-[40%] bg-[#6a9097] flex items-center relative">
          <div className="ist w-[75%] h-[50vh] border-[8px] border-white rounded-[35px] relative -left-[10vw] bg-gray-300  overflow-hidden"><Image className="absolute object-cover "  src={"/istemp.jpeg"} alt="emp" fill={true}/></div>
          <div className="second w-[75%] h-[50vh] border-[8px] border-white rounded-[35px] absolute left-[46vw] md:left-[23vw] bg-gray-300 overflow-hidden"><Image className="absolute object-cover "  src={"/secondemp.jpeg"} alt="emp" fill={true}/></div>
        </div>
        <div className="right px-10 md:px-0 pl-10 pb-10 md:pb-0 md:pl-[15vw]">
          <h1 className='font-bold text-5xl mt-10 md:mt-[17vh]'>Our Vision</h1>

          <div className="points flex justify-center items-start gap-5 mt-5">
            <div className="number h-14 w-14 rounded-full bg-[#6a9097] flex justify-center items-center text-white">01</div>
            <div className="txt w-[60vw] md:w-[35vw]">
              <h2 className='mb-1 text-[#2f5972] font-bold'>Vision</h2>
              <p> Comprehensive Solutions &#58; A single destination for digital presence, aesthetic upgrades, and technological security.</p>
            </div>
          </div>

          <div className="points flex justify-center items-start gap-5 mt-5">
            <div className="number h-14 w-14 rounded-full bg-[#6a9097] flex justify-center items-center text-white">02</div>
            <div className="txt  w-[60vw] md:w-[35vw]">
              <h2 className='mb-1 text-[#2f5972] font-bold'>Vision</h2>
              <p> Customization &#58; Tailored packages to fit client&#45;specific needs, whether a website, home decor, or a tech setup.</p>
            </div>
          </div>

          <div className="points flex justify-center items-start gap-5 mt-5">
            <div className="number h-14 w-14 rounded-full bg-[#6a9097] flex justify-center items-center text-white">03</div>
            <div className="txt  w-[60vw] md:w-[35vw]">
              <h2 className='mb-1 text-[#2f5972] font-bold'>Vision</h2>
              <p>  Expertise &#58; Skilled professionals in web development, design, and tech installation.</p>
            </div>
          </div>

          <div className="points flex justify-center items-start gap-5 mt-5">
            <div className="number h-14 w-14 rounded-full bg-[#6a9097] flex justify-center items-center text-white">04</div>
            <div className="txt  w-[60vw] md:w-[35vw]">
              <h2 className='mb-1 text-[#2f5972] font-bold'>Vision</h2>
              <p> Why Customers Will Choose You &#58; Businesses needing a professional website often look for added convenience, such as security systems for their office. Homeowners interested in interior design often want smart home technology like WIFI and CCTV solutions. A combined offering saves customers time, effort, and cost compared to hiring separate vendors.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page
