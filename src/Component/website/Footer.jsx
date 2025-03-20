import { useContext } from "react";
import WebsiteContext from "../context/WebsiteContext";
import logo_img from "../../assets/default_logo.png"

export default function Footer() {
  const{colorFromdb,dblogo}=useContext(WebsiteContext)
  console.log("footer color from database",colorFromdb.footercolor);
    return (
      <footer className={` text-gray-600 p relative bottom-0 w-full ${colorFromdb.footercolor} `} id="footer">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center p-4">
          
          {/* Left Section - Logo & Copyright */}
          <div className="text-center md:text-left text-gray-600 ">
            {/* <h2 className="text-xl font-semibold">Logo</h2> */}
              <img src={dblogo.image || logo_img} alt="" className="w-25 h-15 rounded-md " />
            {/* <p className="text-sm text-gray-400">© 2024 Your Company. All rights reserved.</p> */}
          </div>
  
          {/* Middle Section - Navigation Links */}
          <nav className="flex flex-col  my-4 md:my-0 font-semibold">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About Us</a>
            <a href="#" className="hover:text-gray-400">Features</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </nav>
  
          {/* Right Section - Social Media */}
          <div className="flex flex-col  font-semibold">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">Instagram</a>
          </div>
  
        </div>
        <p className="text-sm text-center">© 2024 Your Company. All rights reserved.</p>
      </footer>
    );
  }
  