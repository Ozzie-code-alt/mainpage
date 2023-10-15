const Navbar = () => {
    return ( <div className="flex justify-between items-center p-10">
        <div className="text-3xl font-medium">
            Logo
        </div>

        <div className="flex text-end gap-5 hover:cursor-pointer">
            <div >
               <h1>Home</h1>
            </div>
            <div>
                About Us
            </div>
            <div>
                Services
            </div>
            <div>
                Contact Us
            </div>
            <div className="bg-custom-black rounded-xl text-white p-1 ">
                GET STARTED
            </div>
        </div>
    </div> );
}
 
export default Navbar;