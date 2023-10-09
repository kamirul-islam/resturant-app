import React from 'react'

const Item = ({carouselData}) => {
  return (
    <>
    <div className="carousel-inner" role="listbox">
    {carouselData.map((currentItem)=>{
        return(
            <div className={currentItem.active} key={currentItem.id}>
                <img src={currentItem.image} className="w-100 d-block" alt="slide" />
                <div className="carousel-caption d-none d-md-block">
                    <h3>{currentItem.title}</h3>
                </div>
            </div>
        )
    })}
    </div> 
    </>
  )
}

export default Item