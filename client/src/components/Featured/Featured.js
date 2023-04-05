import React from "react"
// import Heading from "../../common/Heading"
import "./featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          {/* <Heading title='Featured Property Types' subtitle='Find All Type of Property.' /> */}
          <h1>Featured Property Types</h1>
          <h3 style={{textAlign:'center'}}>Find All Type of Property.</h3>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured