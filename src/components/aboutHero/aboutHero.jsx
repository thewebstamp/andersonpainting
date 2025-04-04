import './aboutHero.css';
import { Images } from '../../assets/images.js';

function AboutHero() {
    return (
        <div className="about-hero">
            <div className='ah-top'>
                <div className='img-wrap'>
                    <img className='ah-img-1' src={Images.p7} />
                    <img className='ah-img-2' src={Images.acompImg3} />
                    <img className='ah-img-height' src={Images.p7} />
                </div>
            </div>
            
            <div className='ah-base'>
                <div className='ah-headline'>ABOUT ANDERSON PAINTING</div>
                <h2>We Provide the Best Painting Service</h2>
                <p>At Anderson Painting, we bring over {new Date().getFullYear() - 2000} years of experience to every project, delivering high-quality painting solutions for residential, commercial, and healthcare environments.<br />Whether it’s giving a fresh look to apartments, revitalizing commercial spaces, or maintaining the professional appearance of hospitals and healthcare facilities, we handle each project with care and expertise</p>
            </div>
        </div>
    )
}

export default AboutHero;