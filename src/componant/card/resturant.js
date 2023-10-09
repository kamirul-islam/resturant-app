import React, { useState } from 'react';
import Menu from './cardApi';
import Card from './card';
import FilterButton from './filterButton';

const Resturant = () => {

  const [menuData, setMenuData] = useState(Menu);
  function filterItem(category){
    if(category ==="All"){
      return setMenuData(Menu);
    }
    const updatedData = Menu.filter((x) => {
      return x.catagory === category
    });
    setMenuData(updatedData)
  }

  return (
    <>
      <FilterButton filterItem={filterItem}/>
      <div style={{maxWidth: '1320px', margin: 'auto', padding: '0 10px'}}>
        <div className='row'>
          <Card menuData={menuData}/>
        </div>
      </div>
    </>
  )
}

export default Resturant