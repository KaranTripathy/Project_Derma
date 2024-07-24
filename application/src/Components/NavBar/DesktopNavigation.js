
 import NavLinks from "./NavLinks";
 import './NavBar.css';
 import { RiMenuFill } from "react-icons/ri";

 const DesktopNavigation = () =>{
     return(
        <nav className="DesktopNavigation">
              <h2 className="logo">DermaCo</h2>

              <NavLinks />
          </nav>
     )
 }
 export default DesktopNavigation;

 
