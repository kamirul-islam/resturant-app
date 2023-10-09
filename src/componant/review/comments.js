import React from 'react'

const Comments = ({comments, setComments}) => {
    const deleteItem = (index) =>{
        const updateItems = comments.filter((data) =>{
          return  data.id !== index;
        });
        setComments(updateItems);
      }
      const editItem = () =>{

      };
      
  return (
    <>
        <div className='p-1 bg-light'>
            <div style={{maxWidth:'1100px', margin: "auto"}}>
                <h3 className='bg-success bg-opacity-10 p-3 rounded-top-4'>Ratings and reviews <i className="fa-duotone fa-arrow-right fa-fade ms-2"></i></h3>
                <div  style={{maxHeight: "600px", overflow: "scroll", marginBottom:'40px'}}>
                {comments.map((data) =>{
                return(
                    <div className='p-3 m-3 border' key={data.id}>
                    <div className='d-flex position-relative'>
                        <i className="fa-duotone fa-user-tie fs-1 me-3 border rounded-circle p-1 px-2"></i>
                        <h4 className='mt-2'>User Name</h4>
                        <div className="dropstart position-absolute"  style={{ right: "0", cursor:'pointer'}}>
                        <button type="button" className="btn" data-bs-toggle="dropdown">
                        <i className="fa-thin fa-ellipsis-stroke-vertical fs-3"></i>
                        </button>
                        <ul className="dropdown-menu border-0 rounded-0 py-0">
                            <li className="dropdown-item d-flex justify-content-between" onClick={()=>editItem(data.id)}><span>Edit</span><i className="fa-duotone fa-pen-to-square fa-beat-fade mt-1"></i></li>
                            <li className="dropdown-item d-flex justify-content-between" onClick={()=>deleteItem(data.id)}><span>Delete</span><i className="fa-duotone fa-trash fa-bounce mt-2"></i></li>
                        </ul>
                        </div>
                    </div>
                    <div className='ms-2'>
                        <p className='py-2'>⭐⭐⭐⭐⭐ <span>{data.time}</span></p>
                        <p>{data.comment}</p>
                    </div>
                    </div>
                )
                })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Comments