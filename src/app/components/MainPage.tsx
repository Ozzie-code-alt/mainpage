import Image from "next/image"; // handle images

import {BsFacebook, BsTwitter, BsInstagram} from 'react-icons/bs'

const MainPage = () => {
  return (
    <>
      <div className=" h-4/5 grid grid-cols-3">
        <div className="left text-center grid gap-20">
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

          <div className="bg-green-900 h-10 w-28 justify-self-center justify-center flex items-center rounded-lg text-white"> <button> Learn More</button></div>

          <div className="flex">
            <BsFacebook/>
            <BsTwitter/>
            <BsInstagram/>
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
