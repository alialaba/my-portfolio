
export default function Header(){
return(
<header className="header">
        <a href="#" className="header-logo-wrap">
            <img className="header-logo-img" src="https://raw.githubusercontent.com/alialaba/myPortfolio/main/assets/logo.png" alt="logo" className="logo-mine" />
            <span className="header-logo-text is-greeting" id="dev-greet">Ali.dev
           
            </span>
        </a>
        <nav className="header-nav">
            <ul className="header-nav-list">
                    <li className="header-nav-item"><a href="#" className="header-nav-link">About</a></li>
                    <li className="header-nav-item"><a href="#" className="header-nav-link">Experience</a></li>
                    <li className="header-nav-item"><a href="#" className="header-nav-link">Work</a></li>
                    <li className="header-nav-item"><a href="#" className="header-nav-link">Contact</a></li>
                    <li className="header-nav-item"><a href="#" className="header-nav-link header-nav-link__cta btn">Resume</a></li>
            </ul>
        </nav>
        <button className="header-toggle">
            <ion-icon className="header-is-toggle" name="menu-outline"></ion-icon>
            <ion-icon className="header-is-toggle" name="close-outline"></ion-icon>
        </button>
    </header>

);
}