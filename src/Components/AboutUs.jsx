import "../Style/AboutUs.css";
import earth from "../images/earth.gif";
import plane from "../images/plane.gif";
import badge from "../images/badge.gif";
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="titleContainer">
        <p className="Title">About Us</p>
      </div>
      <div className="aboutFlex">
      <div className="aboutUs-Container">

        <div className="about-text aboutFlex">
          We are dedicated to bringing you a seamless shopping experience .
        </div>
        <div className="about-content">
          <img src={earth} className="aboutGif" alt="about Gif" />
          <p className="about-subTitle">Reach Us AnyWhere</p>
          <p className="about-description">
            small description about being able to access our website from
            anyhwere
          </p>
        </div>
        <div className="about-content">
          <img src={plane} className="aboutGif" alt="about Gif" />
          <p className="about-subTitle">World Wide shipping</p>
          <p className="about-description">
          small description about shipping anywhere in the world, right at your step door
          </p>
        </div>
        <div className="about-content">
          <img src={badge} className="aboutGif" alt="about Gif" />
          <p className="about-subTitle">Best Quality</p>
          <p className="about-description">
          small description about offering the best and top rated product
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
