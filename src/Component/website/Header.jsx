import { useContext, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import WebsiteContext from "../context/WebsiteContext";
import logo_img from "../../assets/default_logo.png";
import { useNavigate } from "react-router";


export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { logo, fetchLastLogo, dblogo, logout,colorFromdb, fetchcolor } = useContext(WebsiteContext);
  const [preview, setPreview] = useState(logo_img); 
  const token=localStorage.getItem("token")
  const role=localStorage.getItem('role');
  


  useEffect(() => {
    fetchLastLogo();
    fetchcolor();

  }, []);


  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("role")
   
    } catch (error) {
      console.error("Logout failed:", error);
    }
    navigate("/");
  };
  const handleLogin=()=>{
    if(!token){
      navigate('/login')
    }
  }
  const handleDashboard=()=>{
    if(token&&role==='user'){
      navigate('/userdashboard')
    }
    if(token&&role==="admin")
    {
      navigate('/dashboard')
    }

  }
  console.log("colorFromdb",colorFromdb);

  return (
    <nav className={`${colorFromdb.headercolor||dblogo.selectedColor||'bg-blue-400'} p-4 shadow-md`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="h-10 w-20">
          <img src={dblogo.image || logo_img} alt="" className="w-25 h-15 rounded-md" />
        </div>

        <ul className="hidden md:flex space-x-6 text-white">
          <NavItem name="Home" />
          <NavItem name="About Us" />
          <NavItem name="Services" />
          {token && <NavItem name="Dashboard" onClick={handleDashboard}/>} 
          {/* <NavItem name="Profile " /> */}
          {token ? <NavItem name="Logout" onClick={handleLogout} />:<NavItem name='Login'  onClick={handleLogin}/>} {/* ✅ Fix applied */}
        </ul>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center mt-4 space-y-4 text-white">
          <NavItem name="Home" />
          <NavItem name="About Us" />
          <NavItem name="Services" />
          {token && <NavItem name="Dashboard" onClick={handleDashboard}/>} 
          {/* <NavItem name="Profile" /> */}
         {token ? <NavItem name="Logout" onClick={handleLogout} />:<NavItem name='Login' onClick={handleLogin}/>} {/* ✅ Fix applied */}
        </ul>
      )}
    </nav>
  );
}

function NavItem({ name, onClick }) {
  return (
    <li className="cursor-pointer font-semibold hover:text-gray-300" onClick={onClick}>
      {name}
    </li>
  );
}
