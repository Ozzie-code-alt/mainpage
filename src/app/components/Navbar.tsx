const Navbar = () => {
    return ( <div className="flex justify-between items-center p-10">
        <div className="text-3xl font-medium">
            Logo
        </div>

        <div className="flex text-end gap-5 hover:cursor-pointer">
            <div className="">
                Home
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
            <div>
                GET STARTED
            </div>
        </div>
    </div> );
}
 
export default Navbar;