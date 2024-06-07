import React, { useState } from "react";
import hero from "../../assets/images/9790.jpg";
import {
  FaBootstrap,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoSass,
} from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { SiMui, SiNetlify, SiSwiper } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma, IoLogoVercel } from "react-icons/io5";

const BOT_TOKEN = "7170154053:AAH2GUqkkxH_hbnj5L0juncFcn-qeiJDozk";
const CHAT_ID = "-1002016436113";
let initialState = {
  fname: "",
  lname: "",
  tel: "",
  desc: "",
};

const Home = () => {
  let [data, setData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);

    let text = "Mijoz %0A%0A";
    text += `Ismi:  ${data.fname} %0A%0A`;
    text += `Familya:  ${data.lname} %0A%0A`;
    text += `Telefon:  ${data.tel} %0A%0A`;
    text += `Izoh:  ${data.desc} %0A%0A`;
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setData(initialState);
  };
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
                <a
                  href="https://www.facebook.com/profile.php?id=61553137344754"
                  target="_blank"
                >
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
              <a href="#contact">
                <button>Contact Us</button>
              </a>
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
        <div className="container">
          <div className="content">
            <h1>Skills</h1>
            <div className="cards">
              <div className="card">
                <IoLogoHtml5 />
                <p>Html</p>
              </div>
              <div className="card">
                <IoLogoCss3 />

                <p>Css</p>
              </div>
              <div className="card">
                <IoLogoSass />
                <p>Sass</p>
              </div>
              <div className="card">
                <IoLogoJavascript />
                <p>JavaScript</p>
              </div>
              <div className="card">
                <BiLogoTypescript />
                <p>TypeScript</p>
              </div>
              <div className="card">
                <FaReact />
                <p>ReactJs</p>
              </div>
              <div className="card">
                <TbBrandRedux />
                <p>Redux</p>
              </div>
              <div className="card">
                <SiMui />
                <p>Mui</p>
              </div>
              <div className="card">
                <FaBootstrap />
                <p>Bootstrap</p>
              </div>
              <div className="card">
                <RiTailwindCssFill />
                <p>TailwindCss</p>
              </div>
              <div className="card">
                <SiSwiper />
                <p>Swiper</p>
              </div>
              <div className="card">
                <FaGithub />
                <p>Github</p>
              </div>
              <div className="card">
                <IoLogoVercel />
                <p>Vercel</p>
              </div>
              <div className="card">
                <SiNetlify />
                <p>Netlify</p>
              </div>
              <div className="card">
                <IoLogoFigma />
                <p>Figma</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="container">
          <div className="content">
            <h1>Projects</h1>
            <div className="cards">
              <div className="card"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="container">
          <div className="content">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} action="">
              <input
                required
                value={data.fname}
                onChange={(e) =>
                  setData((p) => ({ ...p, fname: e.target.value }))
                }
                type="text"
                placeholder="Firstname"
              />
              <input
                required
                value={data.lname}
                onChange={(e) =>
                  setData((p) => ({ ...p, lname: e.target.value }))
                }
                type="text"
                placeholder="Lastname"
              />
              <input
                required
                value={data.tel}
                onChange={(e) =>
                  setData((p) => ({ ...p, tel: e.target.value }))
                }
                type="number"
                placeholder="Phone Number"
              />
              <textarea
                required
                value={data.desc}
                onChange={(e) =>
                  setData((p) => ({ ...p, desc: e.target.value }))
                }
                name="text"
                id="text"
                rows="4"
                cols="40"
                placeholder="Izoh..."
              ></textarea>
              <button>Buy now</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
