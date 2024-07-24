import NavLinks from "./NavLinks";
import './NavBar.css';
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";


const MobileNavigation = () =>{
    const [click, setclick] = useState(false);
    const Hamburger = <RiMenuFill className="HamburgerMenu"
            size="30px" 
            color="black"
    
        onClick={() => setclick(!click)} />
    
    return(
       <nav className="MobileNavigation">
             <h2 className="logo">DermaCo</h2>
             {Hamburger}
             {click && <NavLinks />}
         </nav>
    )
}
const Hamburger = <RiMenuFill className="HamburgerMenu"
size="30px" color="black" onClick={() => console.log("click")}/>

export default MobileNavigation;