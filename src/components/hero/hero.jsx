import './hero.css';
import { Images } from '../../assets/images';

function Hero() {
    return (
        <div className="hero-wrap">
            <div className="hero-container">
                <div className="hero-background">
                    <img src={Images.heroBackground} alt="" />
                </div>
                <div className="hero">
                    <div className="hero-top">
                        <div className="small-headline">WELCOME TO ANDERSON PAINTING</div>
                        <h1>Your Trusted Partner for All Your Painting Needs in Jefferson, Kentucky and Surrounding Areas</h1>
                        <p><span>TRANSFORMING SPACES |</span> We specialize in delivering top-quality painting services tailored to meet your needs</p>
                        <div className="hero-btn">
                            <a id='hero-f-btn' className='hero-f-btn' href="#portfolio">View Portfolio</a>
                            <a id='hero-s-btn' className='hero-s-btn' href="#services">See Services</a>
                        </div>
                    </div>

                    <div className="hero-base">
                        <img src={Images.heroImg1} alt="" />
                        <img src={Images.heroImg2} alt="" />
                        <img src={Images.heroImg3} alt="" />
                        <img src={Images.heroImg4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;