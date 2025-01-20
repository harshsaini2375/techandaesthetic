import Image from "next/image";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div >
      <Navbar />
      <div className="intro md:block hidden h-[30vh] md:h-[94vh] w-[99vw] relative ">
        <Image className="absolute object-cover object-top" src={"/intro.png"} alt="introimage" fill={true} />
      </div>
      <div className="home md:flex">
        <div className="left h-[57vh] md:h-[94vh] w-2/4 md:w-1/4  bg-[#6a9097]  relative">
          <div className="circle border-[10px] md:border-[15px] border-white h-[300px] w-[300px] md:h-[450px] md:w-[450px] rounded-full absolute top-[6vh] left-[12vw] md:top-[15vh] md:left-[9vw] bg-gray-300" ></div>
        </div>
        <div className="right md:pl-[17vw] px-5 pt-10 md:pt-[30vh] h-fit  md:h-[93vh] w-screen md:w-3/4 flex flex-col items-start md:items-center">
          <h1 className="font-bold text-2xl md:text-5xl"> Welcome To Our Company</h1>
          <p className=" md:text-center mt-1 md:mt-5 text-lg md:text-xl"> To provide innovative digital solutions, elegant interior designs, and reliable tech products that empower individuals and businesses to live and work smarter and safer. </p>
        </div>
      </div>
    </div>
  );
}
