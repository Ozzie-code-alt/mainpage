'use client'
import React, { useState, useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 640) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  return (
    <>
      {isSmallScreen ? (
        // Render the Select component for small screens
        <Select>
          <SelectTrigger>
            <SelectValue>Menu</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="home">Home</SelectItem>
            <SelectItem value="About Us">About Us</SelectItem>
            <SelectItem value="Services">Services</SelectItem>
            <SelectItem value="Contact Us">Contact Us</SelectItem>
            <SelectItem value="Started">GET STARTED</SelectItem>
          </SelectContent>
        </Select>
      ):(    <div className="flex justify-between items-center p-8">
      <div className="text-3xl font-medium">Logo</div>

      <div className="flex text-end gap-5 hover:cursor-pointer text-black">
        <div className="text-black hover:bg-black rounded-lg hover:text-white p-1 duration-500">
          Home
        </div>
        <div className="text-black hover:bg-black rounded-lg hover:text-white p-1 duration-500">
          About Us
        </div>
        <div className="text-black hover:bg-black rounded-lg hover:text-white p-1 duration-500">
          Services
        </div>
        <div className="text-black hover:bg-black rounded-lg hover:text-white p-1 duration-500">
          Contact Us
        </div>
        <div className="bg-custom-black rounded-xl text-black p-1 hover:bg-black hover:text-white transition-all duration-1000">
          GET STARTED
        </div>
      </div>
    </div>)
       }
    
    
    </>


  );
};

export default Navbar;
