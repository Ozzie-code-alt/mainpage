import Image from "next/image"; // handle images

import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

const MainPage = () => {


 


  return (
    <>
      <div className=" grid grid-cols-3">
        <div className="left text-center grid gap-20 ">
          <div className="text-8xl font-bold text-blue-400 grid gap-4">
            Web <br/>
            Design
            <span className="text-5xl text-green-500"> Landing Page</span>
          </div>

          <div className="">
            Ex proident ex sunt duis. Duis nulla ullamco occaecat dolor in
            voluptate ullamco tempor. Amet nulla ut sint sint velit non in
            pariatur consequat ullamco. Incididunt culpa amet pariatur e a
         
          </div>

          <div className="bg-green-900 h-10 w-28 justify-self-center justify-center flex items-center rounded-lg text-white hover:bg-blue-400 duration-500"> <button> Learn More</button></div>

          <div className="flex justify-self-center gap-5">
            <BsFacebook className="w-8 h-8 text-justin-Color hover:motion-safe:animate-bounce"/>
            <BsTwitter className="w-8 h-8 text-justin-Color hover:motion-safe:animate-bounce"/>
            <BsInstagram className="w-8 h-8 text-justin-Color hover:motion-safe:animate-bounce duration-500 ease-in-out"/>
          </div>
        </div>

        <div className="right col-span-2 flex justify-center">
            <div >
                <Image
                    src={"discusison.svg"}
                    alt="Discussion Image"
                    width={720}
                    height={500}
                />
            </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
