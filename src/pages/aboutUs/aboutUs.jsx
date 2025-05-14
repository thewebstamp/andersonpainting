import './aboutUs.css';
import Heading from '../../components/heading/heading.jsx';
import Button from '../../components/button/button.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
    const titleA = "🛠️ About Us";
    const descriptionA = "We deliver high-quality Painting services with integrity";
    const navigate = useNavigate();
    const navigateToLanding = () => { navigate('/') };
    const navigateToGallery = () => { navigate('/gallery') };

    return (
        <div className="about-us">
            <Heading title={titleA} description={descriptionA} />

            <div className="about-text">
                <div className="about-comp-text">
                    <p>With over <b>{new Date().getFullYear() - 2000} years of experience</b>, Anderson Painting is a name you can trust in residential and commercial painting across Kentucky. From apartments and rental units to hospitals and healthcare facilities, we deliver <b>professional results with precision, care, and efficiency</b>. <br /><br />We understand that your property is more than just a space—it’s a reflection of you. That’s why we treat every project with unmatched attention to detail, using high-quality materials and time-tested techniques to ensure a flawless finish that lasts.</p>
                    <div className="about-bullet">
                        <div className="item">
                            <FontAwesomeIcon className='a-check' icon={faCheck} />
                            <span>Professional<br />Workers</span>
                        </div>
                        <div className="item">
                            <FontAwesomeIcon className='a-check' icon={faCheck} />
                            <span>Guaranteed<br />Quality</span>
                        </div>
                        <div className="item">
                            <FontAwesomeIcon className='a-check' icon={faCheck} />
                            <span>Extensive<br />Experience</span>
                        </div>
                        <div className="item">
                            <FontAwesomeIcon className='a-check' icon={faCheck} />
                            <span>Transparent<br />Quotation</span>
                        </div>
                    </div>
                </div>
            </div>

            <Button title1="Back Home" link1={navigateToLanding} title2="See Porfolio" link2={navigateToGallery} />
        </div>
    )
}

export default AboutUs