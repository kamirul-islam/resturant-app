import React, {useState} from "react";

function LikeButton() {
  const [like, setLike] = useState(100);
  const [isLike, setIsLike] = useState(false);

  function likeButton(){
    setLike(like + (isLike ? -1 : +1));
    setIsLike(!isLike);
  }
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-2 bg-body-secondary rounded">
        
        <p className="m-0">{isLike ? 'You and '+(like-1) +' others like it.' : like + ' Customar likes.'}</p>
        <i className={`like text-danger p-0 fs-3 fa-heart ${isLike ? 'fa-solid' : 'fa-light'}`} onClick={likeButton}></i>
      </div>
    </>
  );
}

export default LikeButton;
