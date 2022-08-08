import {FiGithub} from "react-icons/fi"
import {FiExternalLink} from "react-icons/fi"
export default function (){
    return(
 <section className="project-section" id="work">
    <div className="container">
        <h2 className="subheading">Some Stuffs i've built</h2>
        <ul className="project-featured list padding-md padding-sm">
            
            <li className="featured__item grid grid--2-cols list__item ">
                <div className="project-content">
                    <div className="inner">
                        <p className="heading-primary">Featured Project</p>
                        <h3 className="heading-secondary">Build a Banktrans App</h3>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem obcaecati sit aliquid at, explicabo natus
                            commodi minima Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem obcaecati sit aliquid at, explicabo natus
                            commodi minima</p>
                        </div>
                        <ul className="project-stack list d-rows">
                            <li className="list__item">Html</li>
                            <li className="list__item">Css</li>
                            <li className="list__item">React</li>
                            <li className="list__item">Next.js</li>
                        </ul>
                        <div className="project-link">
                        <a href="#">
                            <FiGithub/>
                        </a>
                        <a href="#">
                           <FiExternalLink/>
                        </a>

                        </div>

                    </div>
                </div>
                <div className="project-image">
                {/* <picture> */}
                    {/* <source srcset="/assets/banktrans.webp" type="images/webp">
                    <source srcset="/assets/desktop-preview1.jpg" type="image/PNG"> */}
                    <img src="/assets/desktop-preview1.jpg" className="project-img" alt="project-image" />
                {/* </picture> */}
                </div>
            </li>
            </ul>
</div>
</section>
    )
}