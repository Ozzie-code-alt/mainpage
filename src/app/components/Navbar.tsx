const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-10">
      <div className="text-3xl font-medium">Logo</div>

      <div className="flex text-end gap-5 hover:cursor-pointer text-black">
        <div className="text-black hover:bg-black rounded-lg hover:text-white p-1 duration-500">
          Home
        </div>
        <div className="text-black hover:bg-black rounded-lg hover:text-white p-1 duration-500">About Us</div>
        <div className="text-black hover:bg-black rounded-lg hover:text-white p-1 duration-500">Services</div>
        <div className="text-black hover:bg-black rounded-lg hover:text-white p-1 duration-500">Contact Us</div>
        <div className="bg-custom-black rounded-xl text-white p-1 hover:bg-black hover:text-white transition-all duration-1000">
          GET STARTED
        </div>
      </div>
    </div>
  );
};

export default Navbar;
