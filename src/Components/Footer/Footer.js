import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
const Footer = () => {
    const ourAddress = [
        { name: "Block-A, House No:45"},
        { name: "Rajshahi, Natore-6450"}
    ];
    const services = [
      { name: "Wedding photography", link: "//wedding" },
      { name: "Birthday photography", link: "//birthday" },
      { name: "Anniversary photography", link: "//anniversary" },
      { name: "Seminar photography", link: "//seminar" },
    ];
    const QuickLink = [
        { name: "Home", link: "/home" },
        { name: "About Us", link: "/about" },
        { name: "Projects", link: "/project" },
        { name: "Contact", link: "/contact" },
    ];
    const AboutUs = [
      {
        name:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit."
      },
    ];
    return (
      <footer className="footer-area clear-both">
        <div className="container pt-4">
          <div className="row py-4">
            <FooterCol key={1} menuTitle="About Us" menuItems={AboutUs}>
              <ul className="social-media list-inline">
                <li className="list-inline-item">
                  <a href="//facebook.com"></a>
                </li>
                <li className="list-inline-item">
                  <a href="//google.com"></a>
                </li>
                <li className="list-inline-item">
                  <a href="//instagram.com"></a>
                </li>
              </ul>
              <div className="">
                <h6>Call now</h6>
                <button className="btn btn-primary">+8801722231395</button>
              </div>
            </FooterCol>
            <FooterCol key={1} menuTitle="Our Address" menuItems={ourAddress} />
            <FooterCol key={3} menuTitle="Quick link" menuItems={QuickLink} />
            <FooterCol key={2} menuTitle="Services" menuItems={services} />
          </div>
        </div>
        <div className="copyRight text-center py-4 footer">
          <p>
            Copyright {new Date().getFullYear()} All Rights Reserved by SHKnight
          </p>
        </div>
      </footer>
    );
};

export default Footer;