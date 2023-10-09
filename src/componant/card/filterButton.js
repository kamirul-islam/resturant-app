import React, {useState} from 'react';
import Menu from './cardApi';
import './filterButtonStyle.css'

export const uniqueCat = [...new Set(Menu.map((curElement)=>{
    return curElement.catagory
})), "All"];


const FilterButton = ({filterItem}) => {
    const [catList] = useState(uniqueCat); 
    const [activeButton, setActiveButton] = useState(uniqueCat[uniqueCat.length - 1]);
    
  return (
    <>
        <div className='bg-light'>
            <div style={{maxWidth: '1320px', margin: 'auto', padding: '0 10px'}}>
                <h1 className=' display-5 py-3 pt-5'>Please Check out your fevourit food from the list:</h1>
                <ul className=" d-flex my-4 justify-content-center p-0">
                {
                    catList.map((curElement, index) =>{
                        
                        return(
                            <div className=' rounded ' key={index}>
                                <button 
                                className={`btn ${curElement === activeButton ? 'active-btn' : ''} px-sm-5`} 
                                id={curElement} 
                                onClick={function handleButtonClick(event) {
                                    const buttonId = event.target.dataset.id;
                                    console.log(buttonId)
                                    setActiveButton(buttonId);
                                    filterItem(curElement);
                                }}
                                data-id={curElement}>{curElement}</button>
                            </div>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    </>
  )
}

export default FilterButton;