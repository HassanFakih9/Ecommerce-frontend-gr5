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
import whatsapp from '../images/whatsapp.svg'
import callcenter2 from '../images/callcenter2.png'
import faq from '../images/Faq2.png'
import arrowdown2 from '../images/arrow-down2.svg'
import { useEffect, useState } from 'react';


const Contact = () => {
    const [question1, setquestion1] = useState(false)
    const [question2, setquestion2] = useState(false)
    const [question3, setquestion3] = useState(false)
    const [question4, setquestion4] = useState(false)

    const showAnswer = (i) => {
        switch (i) {
            case 1:
                setquestion1(!question1)
                break
            case 2:
                setquestion2(!question2)
                break
            case 3:
                setquestion3(!question3)
                break
            case 4:
                setquestion4(!question4)
                break
            default: break
        }

    }

    return (
        <div className="contactus">
            <div className="contactus1">


                <MenuBar />
                <div className="contact-container">
                    <div className="contact-callcenter">
                        <img src={callcenter} className="callcenter" />
                    </div>

                    <div className="contact-message">
                        <div >
                            <p className="contact-title">Drop a Message </p>
                            <p> you have any inquiry or some feedback to us ?<br /> fill out the form below to contact our team </p>
                        </div>
                        <div className='contact-information'>
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
                                <div className='contact-submitbtn'>
                                    <button type="button" className="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact-back'>
                <div className='contact-back2'>
                    <div className="contact-socialmedia">
                        <div className="contact">
                            <h1 > Contact Information </h1>
                            <div className="contact-email">
                                <img src={email} />
                                <p> ecommerce @gmail.com </p>
                            </div>
                            <div className="contact-email">
                                <img src={phone} />
                                <p> 961 1690448 </p>
                            </div>
                            <div className="contact-email">
                                <img src={whatsapp} />
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
                            <div className="contact-email1">
                                <img src={facebook} />
                                <img src={intagram} />
                                <img src={twitter} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact-faq'>

                <div className="faq-part1">
                    <div className="faq-image">
                        <img src={faq} />
                    </div>
                    <div className='faq-QA'>
                        <div className='faq-question' onClick={() => showAnswer(1)} >
                            <p> What payment do you accept ?<img src={arrowdown2} className='arrowdown2' /> </p>
                        </div>
                        {question1 &&
                            <div className='faq-answer'>
                                <p> Cash on delivery</p>
                            </div>
                        }

                        <div className='faq-question' onClick={() => showAnswer(2)}>
                            <p> When i will receive my order?<img src={arrowdown2} className='arrowdown2' /></p>
                        </div>
                        {question2 &&
                            <div className='faq-answer'>
                                <p> 24 to 48 hours</p>

                            </div>
                        }
                        <div className='faq-question' onClick={() => showAnswer(3)}>
                            <p> Where are you located?<img src={arrowdown2} className='arrowdown2' /></p>

                        </div>
                        {question3 &&
                            <div className='faq-answer'>
                                <p>All Across the middle east </p>
                            </div>}
                        <div className='faq-question' onClick={() => showAnswer(4)}>
                            <p> Do you have extra fees? <img src={arrowdown2} className='arrowdown2' /></p>
                        </div>
                        {question4 &&
                            <div className='faq-answer'>
                                <p>No extra fees </p>

                            </div>
                        }
                    </div>
                </div >
            </div>
            <Footer />
        </div>


    )
};

export default Contact;