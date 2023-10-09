import React, {useState} from 'react';
import From from './from';



const Review = () => {
  const [inputData, setInputData] = useState('');
  return (
    <>
      <From inputData={inputData} setInputData= {setInputData} />
    </>
  )
}

export default Review