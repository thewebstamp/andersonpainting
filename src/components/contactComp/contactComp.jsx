import './contactComp.css';
import { Images } from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactComp() {
    const contact = [
        {
            icon: faPhone,
            form: 'Phone Number',
            detail: '+1 502-200-2248',
            openLink: "tel:+15022002248"
        },
        {
            icon: faEnvelope,
            form: 'Email',
            detail: 'AndersonPainting502 @gmail.com',
            openLink: "mailto:AndersonPainting502@gmail.com?Subject=Project Enquiry"
        }
    ];

    return (
        <div className="contact-comp">
            <div className="cc-top">
                <div className="cc-headline">HAVE A PAINTING PROJECT?</div>
                <h2>Reachout to Us Today for Your Painting Service</h2>
                <div className="cc-info">
                    {contact.map((info, i) => (
                        <div key={i} className="cc-item">
                            <hr />
                            <div className="ic-info">
                                <a href={info.openLink}><FontAwesomeIcon className='ci-icon' icon={info.icon} /></a>
                                <div className="info">
                                    <p className='cc-solid'>{info.form}</p>
                                    <a href={info.openLink}>{info.detail}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="cc-base">
                <img src={Images.deck} alt="" />
            </div>

            <div className="cc-socials">
                <a href="https://web.facebook.com/profile.php?id=61560455635781" target='_blank'><FontAwesomeIcon className='ccs-icon' icon={faFacebookMessenger} /></a>
                <a href="#"><FontAwesomeIcon className='ccs-icon' icon={faInstagram} /></a>
            </div>
        </div>
    )
}

export default ContactComp;