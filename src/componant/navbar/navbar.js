import React, { useState } from 'react';
import { uniqueCat } from '../card/filterButton';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearchValue = (event) => {
    setSearchValue(event.target.value)
  }
  const onSearch = (searchTeam) =>{
    setSearchValue(searchTeam)
    console.log("You search", searchTeam)
  }
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light bg-gradient bg-opacity-75 fixed-top shadow">
        <div className='container-fluid' style={{maxWidth: '1320px', margin:'auto'}}>
        <a className="navbar-brand h2" href="hello">Foo<span className="text-danger">d Vill</span>ege</a>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active px-3 text-info" href="hello" aria-current="page">
              <i className="fa-duotone fa-house-chimney"></i> Home <span className="visually-hidden">(current)</span></a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="hello"><i className="fa-solid fa-code-branch"></i> Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="hello" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu border-0 rounded-0" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="hello">Action 1</a>
                <a className="dropdown-item" href="hello">Action 2</a>
              </div>
            </li>
          </ul>
          <div className="d-block my-2 my-lg-0">
            <div className='d-flex'>
              <input className="form-control me-sm-2" type="text" placeholder="Search" value={searchValue} onChange={handleSearchValue} />
              <button className="btn btn-outline-success my-2 my-sm-0" onClick={()=>{onSearch(searchValue)}}>Search</button>
            </div>
            <div className=' position-absolute'  style={{width: '290px'}}>
              {uniqueCat.filter(item => {
                const searchTeam = searchValue.toLowerCase();
                const search = item.toLowerCase();
                return searchTeam && search.startsWith(searchTeam) && search !== searchTeam
              }).map((item, event) =>{
                return (
                  <div key={event} className='d-block bg-light p-1 border' onClick={()=> onSearch(item)}>{item}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar