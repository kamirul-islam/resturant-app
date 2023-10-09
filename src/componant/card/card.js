import React from 'react';
import LikeButton from './likeButton';
import './cardstyle.css'

const Card = ({ menuData }) => {
  return (
    <>
    {menuData.map((x) =>{
      return(
          <div className='col-md-6 col-lg-4' key={x.number}>
            <div className="card shadow-lg mb-4 overflow-hidden rounded-2">
              <div className='card-img rounded-bottom-0'>
                <img className="card-img-top" src={x.images} alt={x.title} />
              </div>
              <div className="card-body my-3 p-sm-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="border border-2 px-2 rounded-circle border-success">{x.number}</h4>
                  <p className="bg-info bg-opacity-25 rounded px-3">{x.catagory}</p>
                </div>
                <h4 className="card-title">{x.title} <i className="fa-duotone fa-arrow-right fa-shake card-icon"></i></h4>
                <p className="card-text">{x.discribe}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <h5>{x.price}</h5>
                  <button className="btn btn-outline-primary opacity-75">Check out</button>
                </div>
              </div>
              <LikeButton />
            </div>
          </div>
      )
    })}
    </>
  )
}

export default Card