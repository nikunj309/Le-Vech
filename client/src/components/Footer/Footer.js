import React from 'react'
import "./footer.css"
import { SocialIcon } from 'react-social-icons';
// import { BsArrowRightShort } from "react-icons/fa";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BsArrowRight,BsFillTelephoneFill,BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <footer className="footer" id="contact">
        <div className="box-container">
            <div className="mainBox">
                <div className="content">
                    <a href="#"><img  className="footerlogo" src="./logo.png" alt=""/></a>
                    {/* <h1 className="logoName"> Cakyy </h1> */}
                </div>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta accusamus maxime quod.</p>

            </div>
            <div className="box">
                <h3>Quick link</h3>
                <a href="/"><i><BsArrowRight/></i>Home</a>
                <a href="/about"> <i><BsArrowRight/></i>About</a>
                <a href="/seller"> <i><BsArrowRight/></i>For Sell/Rent</a>
                <a href="/save"> <i><BsArrowRight/></i>My List</a>
                {/* <a href="#"> <i><BsArrowRight/></i>contact</a> */}

            </div>
            {/* <div className="box">
                <h3>Extra link</h3>
                <a href="#"> <i><BsArrowRight/></i>Account info</a>
                <a href="#"> <i><BsArrowRight/></i>order item</a>
                <a href="#"> <i><BsArrowRight/></i>privacy policy</a>
                <a href="#"> <i><BsArrowRight/></i>payment method</a>
                <a href="#"> <i><BsArrowRight/></i>our  services</a>
            </div> */}
            <div className="box">
                <h3>Contact Info</h3>
                <a href="tel:+91 9327604673"> <i ><BsFillTelephoneFill/></i>+91 9327604673</a>
                <a href="mailto:jeminaghera159@gmail.com?subject=Feedback&body=Message" className="text-decoration-none" rel="noopener" target="_blank">Contact@Le-Vech</a>
               

            </div>

        </div>
        <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            {/* <a href="#" className="fab fa-twitter"></a> */}
            <SocialIcon url="https://twitter.com/levech" />
            <SocialIcon url="https://instagram.com/levech" />
            <SocialIcon url="https://facebook.com/levech" />
            {/* <a href="#" className="fab fa-instagram"></a> */}
            {/* <AiOutlineInstagram/> */}
            {/* <a href="#" className="fab fa-linkedin"></a> */}
            <SocialIcon url="https://linkedin.com/in/levech" />
            {/* <a href="#" className="fab fa-pinterest"></a> */}
            <SocialIcon network="pinterest" style={{ height: 50, width: 50 }} />
        </div>
        <div className="credit">
            created by <span>Mr.Jemin Aghera </span> |all rights reserved ! 
        </div>
    </footer>
    </>
  )
}

export default Footer;
