import React from 'react'
import Navbar from '../Components/Navbar'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <Navbar />
            <div className="contact text-white px-5 md:px-10 py-5 h-[93vh] w-[80vw] md:w-[40vw] bg-[#6a9097]">
                <h1 className='font-bold text-4xl md:text-5xl mb-[10vh] '>Contact us</h1>
                
                <div className="location mt-10 flex  gap-4 md:gap-10  items-center">
                    <div className="icon  h-14 w-14  flex justify-center items-center rounded-full bg-white"><Image src={"/location.svg"} alt='location' height={30} width={30} /></div>
                   <p className='w-[51vw] md:w-fit'>Location : Rathee complex main bazar bahadurgarh - 124507</p>
                </div>

                <div className="location mt-10 flex gap-4 md:gap-10  items-center">
                    <div className="icon  h-14 w-14  flex justify-center items-center rounded-full bg-white"><Image src={"/phone.svg"} alt='phone' height={30} width={30} /></div>
                   <p className='w-[51vw] md:w-fit'>+91 70150 73529</p>
                </div>

                <div className="location mt-10 flex gap-4 md:gap-10  items-center">
                    <div className="icon  h-14 w-14  flex justify-center items-center rounded-full bg-white"><Image src={"/mail.svg"} alt='mail' height={30} width={30} /></div>
                   <p className='w-[51vw] md:w-fit'>Akshayattri999@gmail.com</p>
                </div>

                

                
            </div>
        </div>
    )
}

export default page
