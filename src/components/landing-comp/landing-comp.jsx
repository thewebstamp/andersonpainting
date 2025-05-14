import './landing-comp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faYelp } from '@fortawesome/free-brands-svg-icons';
import Images from '../../assets/images.js';
import Header from '../header/header.jsx';

function LandingComp() {

    const info = [
        {
            icon: faPhone,
            detail: "+1 502-200-2248",
            link: "tel:+15022002248"
        },
        {
            icon: faEnvelope,
            detail: "AndersonPainting502 @gmail.com",
            link: "mailto:AndersonPainting502@gmail.com?Subject=Project Enquiry"
        },
        {
            icon: faYelp,
            detail: "View Yelp Profile",
            link: "https://www.yelp.com/biz/anderson-painting-louisville-2?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
        },
        {
            icon: faFacebookF,
            detail: "See Facebook Page",
            link: "https://web.facebook.com/profile.php?id=61560455635781"
        },
        {
            icon: faStar,
            detail: "Google Review from Customers",
            link: "https://g.co/kgs/Yq2kYG8"
        }
    ];

    return (
        <div className="landing-comp">
            <div className="top">
                <div className="top-text">
                    <img src={Images.logo} alt="Anderson Painting Logo" />
                    <Header />
                    <p>Residential Painting <span>|</span> Commercial & Apartment Repaints <span>|</span> Healthcare & Hospital Facilities <span>|</span> Spray Finishing & Custom Coatings</p>
                </div>
                <div className="trapezium"></div>
            </div>
            
            <div className="middle">
                {
                    info.map((infoItem, index) => (
                        <div className="info-item" key={index}>
                            <a href={infoItem.link} className='icon-wrap'><FontAwesomeIcon icon={infoItem.icon} className='icon' /></a>
                            <div className="design">
                                <div className="rect"></div>
                                <div className="circle"></div>
                            </div>
                            <p><a href={infoItem.link}>{infoItem.detail}</a></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LandingComp;