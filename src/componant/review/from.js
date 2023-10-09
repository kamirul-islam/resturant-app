import React, { useState, useEffect } from 'react';
import Comments from './comments';

// get localStorage data
const getLocalStorageData = () =>{
    const list = localStorage.getItem("comments");
    if(list) {
      return JSON.parse(list)
    }else{
      return[]
    }
  }


const From = ({inputData, setInputData}) => {
    const [comments, setComments] = useState(getLocalStorageData());

    const addComment = () =>{
        if(!inputData) {
          alert("Please add your comment")
        }else{
          const storeComment = {
            time: new Date().toLocaleString(),
            id: new Date().getTime().toString(),
            comment: inputData
          }
          setComments([...comments, storeComment]);
          setInputData("")
        }
      };
    
      const handleKeyPress = (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          addComment();
      }
      };
    
      // Adding localStorage
     useEffect(() =>{
      localStorage.setItem('comments',JSON.stringify(comments))
     },[comments]);

  return (
    <>
        <div className=' bg-light'>
            <div className='px-2 py-5 mx-auto' style={{maxWidth:'600px'}}>
                <h3 className='bg-danger bg-opacity-10 p-3 rounded-top-4 m-0'>What's on your mind . . .</h3>
                <div className='add-items border-2 p-3 border'>
                    <textarea className='d-block form-control mb-3' type="text" rows="4" placeholder='✍ Please write reviews on our foods...' value={inputData} onChange={(event)=>{
                    setInputData(event.target.value)
                    }} onKeyDown={handleKeyPress}/>
                    <button id='subButton' className='d-block mx-auto btn btn-outline-success' type='submit' onClick={addComment}>Submit</button>
                
                </div>
            </div>
        </div>
        <Comments comments={comments} setComments= {setComments} />
    </>
  )
}

export default From;