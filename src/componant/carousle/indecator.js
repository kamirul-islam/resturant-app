import React from 'react'
const Indecator = ({ carouselData }) => {
  return (
    <>
      <ol className="carousel-indicators">
      {carouselData.map((x)=>{
            return(
                <li data-bs-target="#carouselId" data-bs-slide-to={x.number} className={x.indecator} aria-current="true" aria-label={x.slide} style={{listStyle: 'none'}} key={x.id}></li>
                )})}
      </ol>
      
    </>
  )
}

export default Indecator