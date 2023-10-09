import React from 'react'
import './style.css'

//api of footer
const about = 'My restaurant, a labor of love and culinary passion, is a haven for food enthusiasts seeking a memorable dining experience. Nestled in the heart of a vibrant city, it exudes an inviting ambiance that welcomes guests with warmth and sophistication. From the moment you step through the doors, you are greeted by the tantalizing aroma of expertly crafted dishes that tell a story of flavors from around the world';
  const footerCat = ['Breakfast', 'Lunch', 'Evening', 'Dinner'];
  const quickLink = ['About Us', 'Contact Us', 'Contribute', 'Privacy Policy'];
  const socialIcon = [{
    id: 1,
    name: 'facebook',
    address: 'https://www.facebook.com/kamirul.420/',
    icon: 'fa-brands fa-facebook-f'
  },{
    id: 2,
    name: 'twitter',
    address: 'https://twitter.com/?lang=en',
    icon: 'fa-brands fa-twitter'
  },{
    id: 3,
    name: 'youtube',
    address: 'https://www.youtube.com/',
    icon: 'fa-brands fa-youtube'
  },{
    id: 4,
    name: 'linkedin',
    address: 'https://telegram.org/kamirul420/',
    icon: 'fa-brands fa-telegram'
  }]

//api close

const Footer = () => {
  return (
    <>
        <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">{about}</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              {footerCat.map((element, index) => {
                  return(
                    <li key={index}><a href={element}>{element}</a></li>
                  )
                })}
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              {quickLink.map((element, index) => {
                  return(
                    <li key={index}><a href={element}>{element}</a></li>
                  )
                })}
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by  
         <span className=' text-warning text-opacity-75'> Kamiurul islam</span>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
            {socialIcon.map((element)=>{
              return(
                <li key={element.id}>
                  <a className={element.name} href={element.address}>
                    <i className={element.icon}></i>
                  </a>
                </li>
              )
            })} 
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  )
}

export default Footer