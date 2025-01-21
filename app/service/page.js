import React from 'react'
import Navbar from '../Components/Navbar'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h1 className='font-bold text-5xl text-center my-10'>Our Services</h1>
                <div className="services w-[100vw] pb-10 md:pb-0 px-5 md:px-20 min-h-[70vh] h-fit  md:grid grid-cols-4 md:space-y-0 space-y-10 gap-5">

                    <div className="webdev  h-[67vh] space-y-7">
                        <div className="up gap-5  flex justify-center h-[35%]">
                            <div className="number h-14 w-14 rounded-full bg-[#72A0C1]  md:bg-[#6a9097]  flex justify-center items-center text-white">01</div>
                            <p className='w-[70%] '> Web Development &#58; Create modern, responsive websites tailored to individual or business needs. Services include e&#45;commerce platforms, SEO optimization, and website maintenance.</p>
                        </div>
                        <div className="down rounded-3xl bg-gray-300 w-full h-[60%] relative overflow-hidden">
                            <Image className="absolute object-cover "  src={"/website.jpeg"} alt="website" fill={true}/>
                        </div>
                    </div>

                    <div className="interior  h-[67vh] space-y-7">
                        <div className="up gap-5  flex justify-center h-[35%]">
                            <div className="number h-14 w-14 rounded-full bg-[#72A0C1]  md:bg-[#6a9097]  flex justify-center items-center text-white">02</div>
                            <p className='w-[70%] '>  Interior Designing &#58; Transform spaces with aesthetic and functional designs, whether for homes, offices, or commercial spaces.</p>
                        </div>
                        <div className="down rounded-3xl bg-gray-300 w-full h-[60%] relative overflow-hidden"><Image className="absolute object-cover "  src={"/interiordesign.jpeg"} alt="interiordesign" fill={true}/></div>
                    </div>

                    <div className="wifi  h-[67vh] space-y-7">
                        <div className="up gap-5  flex justify-center h-[35%]">
                            <div className="number h-14 w-14 rounded-full bg-[#72A0C1]  md:bg-[#6a9097]  flex justify-center items-center text-white">03</div>
                            <p className='w-[70%] '>  WIFI Systems &#58; Offer high&#45;speed internet solutions, including routers, extenders, and customized setups for homes and offices.</p>
                        </div>
                        <div className="down rounded-3xl bg-gray-300 w-full h-[60%] relative overflow-hidden"><Image className="absolute object-cover "  src={"/wifi.jpeg"} alt="wifi" fill={true}/></div>
                    </div>

                    <div className="cctv  h-[67vh] space-y-7">
                        <div className="up gap-5  flex justify-center h-[35%]">
                            <div className="number h-14 w-14 rounded-full bg-[#72A0C1]  md:bg-[#6a9097]  flex justify-center items-center text-white">04</div>
                            <p className='w-[70%] '>  CCTV Cameras &#58; Provide top&#45;notch security systems, including indoor, outdoor, and smart cameras, with installation and maintenance.</p>
                        </div>
                        <div className="down rounded-3xl bg-gray-300 w-full h-[60%] relative overflow-hidden"><Image className="absolute object-cover object-right"  src={"/camera.jpeg"} alt="camera" fill={true}/></div>
                    </div>

                    



                    
                </div>
            </div>
        </div>
    )
}

export default page
