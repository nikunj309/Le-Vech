import React from "react"
// import Back from "../common/Back"
// import Heading from "../common/Heading"
import img from "../img/about.jpg"
import "./about.css"

const About = () => {
    return (
        <>
            <section className='about'>
                <div className='back'>
                    <div className='container'>
                        {/* <span>About Us</span> */}
                        <h1>About Us - Who We Are?' </h1>
                    </div>
                    <img src={img} alt='' />
                </div>
                <div className='container flex mtop'>
                    <div className='left row'>
                        {/* <Heading title='Our Agency Story' subtitle='Check out our company story and work process' /> */}
                        <div className='heading'>
                            <h1>About our website : 
                                In our website, you can explore amazing properties and also you can list your properties here for rent or sell purpose which we will show on our website.
                            </h1>
                            <p></p>
                        </div>
                        <p></p>
                        <p></p>
                        {/* <button className='btn2'>More About Us</button> */}
                    </div>
                    <div className='right row'>
                        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnJXazYymDPtrq0moRBPDUggGeF_tH8yv1w&s' alt='' /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About