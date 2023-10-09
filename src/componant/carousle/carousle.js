import React, { useState } from 'react'
import CarousleApi from './caroApi';
import Indecator from './indecator';
import Item from './item';



const Carousle = () => {
    const [carouselData] = useState(CarousleApi);
  return (
    <>
      <div className='bg-light'>
        <div style={{maxWidth: '1320px', margin: 'auto', padding: '0 10px'}}>
          <div style={{marginTop: "62px"}}>
            <div id="carouselId" className="carousel slide pb-2 rounded-2 border-danger border shadow" style={{maxHeight: "400px", overflow: 'hidden'}} data-bs-ride="carousel">
              <Indecator carouselData= {carouselData}/>
              <Item carouselData= {carouselData}/>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousle