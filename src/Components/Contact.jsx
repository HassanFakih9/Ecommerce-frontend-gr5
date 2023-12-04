import '../Style/contact.css';
import MenuBar from './MenuBar';
import Footer from './Footer';
import callcenter from '../images/callcenter.jpg'
import phone from '../images/phone.svg'
import email from '../images/email.svg'
import location from '../images/location.svg'
import facebook from '../images/facebook.svg'
import intagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import callcenter2 from '../images/callcenter2.png'

const Contact = () => {
    return (
        <div className="contactus">

            <MenuBar />
            <div className=" contact-container">
                <div className="contact-callcenter">
                    <img src={callcenter} className="callcenter" />
                </div>

                <div className="contact-message">
                    <div >
                        <p className="contact-title">Drop a Message </p>
                        <p> you have any inquiry or some feedback to us ?<br /> fill out the form below to contact our team </p>
                    </div>

                    <div className="contact-info">
                        <div className="contact-name">
                            <input type="text" id="username" placeholder="Name" />
                        </div>
                        <div className="contact-lastname">
                            <div className=" text">
                                <input type="text" id="username" placeholder="Lastname" />
                            </div>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-name">
                            <input type="text" id="username" placeholder="Email" />
                        </div>
                        <div className="contact-lastname">
                            <div className=" text">
                                <input type="text" id="username" placeholder="Phone" />
                            </div>

                        </div>

                    </div>
                    <div className="contact-message">
                        <input type="text" id="username" placeholder="Message" className="message" />

                        <button type="button" className="submit">
                            Submit
                        </button>
                    </div>
                </div>

            </div>
            <div className="contact-socialmedia">
                <div class="contact">
                    <h1 > Contact Information </h1>
                    <div className="contact-email">
                        <img src={email} />
                        <p> ecommerce @gmail.com </p>
                    </div>
                    <div className="contact-email">
                        <img src={phone} />
                        <p> 961 70307183 </p>
                    </div>
                    <div className="contact-email">
                        <img src={location} />
                        <p> We're available in stores across the<br /> Middle East, find one near you. </p>
                    </div>
                </div>
                <div className="contact-callcenter2">
                    <div className="find">
                        <h1> Find Us On </h1>
                        <img src={callcenter2} />
                    </div>
                    <div class="contact-email">
                        <img src={facebook} />
                        <img src={intagram} />
                        <img src={twitter} />

                    </div>

                </div>


            </div>
        </div >
    )
};

export default Contact;