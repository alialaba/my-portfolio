import {FiTwitter, FiGithub, FiLinkedin, FiCodepen} from "react-icons/fi";
// import {contactLinks} from "../data"
export default function  SocialCustom (){
 
    return(
        
        <footer className="footer-section">
     <div className="container">
         <div className="footer-section-content">
            <ul className="footer-section-list">
            <li className="footer-section-list__item" >
                    <a href="codepen.com" alt="Codepen" className="footer-section-social__link">
                       <FiCodepen/>
                    </a>
            </li>
            <li className="footer-section-list__item" >
                    <a href="linkedin.com/in/alialaba01" alt="Linkedin" className="footer-section-social__link">
                        <FiLinkedin/>
                    </a>
            </li>
            <li className="footer-section-list__item">
                    <a href="twitter.com/@thisaliaba" alt="Twitter" className="footer-section-social__link">
                        <FiTwitter/>
                    </a>
            </li>
            <li className="footer-section-list__item">
                    <a href="github.com/alialaba" alt="Github" className="footer-section-social__link">
                        <FiGithub/>
                    </a>
            </li>
            </ul>
         </div>
     </div>
 </footer>

    )
}