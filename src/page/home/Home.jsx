import React from "react";
import hero from "../../assets/images/9790.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="cards">
            <div className="card" data-aos="fade-right">
              <h1>Hello, It's Me</h1>
              <h1>Muhammadamin Zokirov</h1>
              <h2>
                And I'm a <span>Frontend Developer</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                ea, earum neque incidunt at consectetur.
              </p>
              <div className="contact">
                <a href="">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/b1lol_dev/" target="_blank">
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <a href="https://t.me/Z180206" target="_blank">
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
            <div
              className="card"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div className="img">{/* <img src={hero} alt="" /> */}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills">
        <div className="container"></div>
      </section>
    </main>
  );
};

export default Home;
