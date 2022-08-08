import logo from "../assets/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {VscChromeClose} from "react-icons/vsc";
import{links} from "../data";
export default function Header(props){
return(
<header className="header">
        <a href="#" className="header-logo__wrap">
            <img className="header-logo__img" src={logo} alt="logo"  />
            <span className="header-logo__text is-greeting" >Ali.dev
           
            </span>
        </a>
        <nav className={`header-nav ${props.openState}`}>
            <ul className="header-nav__list">
                {links.map((link)=>{
                      const { id, url, text, classLink, classList } = link;
                   return(
                    <li key={id} className={classList}>
                        <a href={url} className={classLink}> {text}</a>
                    </li>
                   )
                })}

          </ul>
       
        </nav>
        <button className={`header-toggle ${props.toggledIcon}`} onClick={props.onToggle}>
            <HiOutlineMenuAlt3 className="header-toggle--isToggle" name="menu-outline"/>
            <VscChromeClose className="header-toggle--isToggle" name="close-outline"/>
        </button>
        
    </header>

);
}