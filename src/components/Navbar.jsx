import logo from "../assets/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {VscChromeClose} from "react-icons/vsc";
export default function Header({onToggle}){
return(
<header className="header">
        <a href="#" className="header-logo__wrap">
            <img className="header-logo__img" src={logo} alt="logo"  />
            <span className="header-logo__text is-greeting" >Ali.dev
           
            </span>
        </a>
        <nav className="header-nav">
            <ul className="header-nav__list">
                    <li className="header-nav__item"><a href="#" className="header-nav__link">About</a></li>
                    <li className="header-nav__item"><a href="#" className="header-nav__link">Experience</a></li>
                    <li className="header-nav__item"><a href="#" className="header-nav__link">Work</a></li>
                    <li className="header-nav__item"><a href="#" className="header-nav__link">Contact</a></li>
                    <li><div className="header-nav__btn"><a href="#" className=" header-nav__cta btn">Resume</a></div></li>
            </ul>
        {/* <div className="header-nav__btn"><a href="#" className=" header-nav__cta btn">Resume</a></div> */}
        </nav>
        <button className="header-toggle" onClick={onToggle}>
            <HiOutlineMenuAlt3 className="header-toggle--isToggle" name="menu-outline"/>
            <VscChromeClose className="header-toggle--isToggle" name="close-outline"/>
            {/* <ion-icon className="header-toggle--isToggle" name="menu-outline"></ion-icon> */}
            {/* <ion-icon className="header-toggle--isToggle" name="close-outline"></ion-icon> */}
        </button>
        
    </header>

);
}