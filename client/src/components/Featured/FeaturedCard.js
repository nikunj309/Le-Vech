import React from "react"
// import { featured } from "../../data/Data"
import img1 from '../img1/featured1.png'
import img2 from '../img1/featured2.png'
import img3 from '../img1/featured3.png'
import img4 from '../img1/featured4.png'
import img5 from '../img1/featured5.png'

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        
          <div className='box' >
            <img src={img1} alt='' />
            <h4>Family House</h4>
            {/* <label>{items.total}</label> */}
          </div>
          <div className='box' >
            <img src={img2} alt='' />
            <h4>House & Villa</h4>
            {/* <label>{items.total}</label> */}
          </div>
          <div className='box' >
            <img src={img3} alt='' />
            <h4>Apartment</h4>
            {/* <label>{items.total}</label> */}
          </div>
          <div className='box' >
            <img src={img4} alt='' />
            <h4>Office & Studio</h4>
            {/* <label>{items.total}</label> */}
          </div>
          <div className='box' >
            <img src={img5} alt='' />
            <h4>Villa & Condo</h4>
            {/* <label>{items.total}</label> */}
          </div>
      </div>
    </>
  )
}

export default FeaturedCard