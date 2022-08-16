export default function AboutSection(){
    return(
        <section className="about-section" id="about">
    <div className="container">
        <div className="about padding-md padding-sm">
            <div className="about__content">
                <div>
                    <h2 className="subheading">About Me</h2>
                    <p className="about__describe">
                        Hello! My name is Aliyu and I enjoy creating things that live on the internet. My interest in web development
                        started
                        back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button
                        taught me a lot about HTML & CSS!
                    </p>
                    <p className="">Here are few technologies that I've been working with recently;</p>

                </div>
                
                <ul className="tool__list techie__list list" type="">
                    <li className="tool__item techie__item list__item">JavaScript [Es6+]</li>
                    <li className="tool__item techie__item list__item">React Js</li>
                    <li className="tool__item techie__item list__item">HTML5</li>
                    <li className="tool__item techie__item list__item">CSS3</li>
                    <li className="tool__item techie__item list__item">Tailwind CSS</li>
                    <li className="tool__item techie__item list__item">WordPress</li>
                </ul>
            
            </div>
            <div className="about__img">
                <img src="/assets/mine.jpg" alt="my name" className="about__img--mine"/>
             {/* <span className="about__img--border-1"></span>
            <span className="about__img--border-2"></span>  */}
            </div>

        </div>
    </div>

</section>
    );
}