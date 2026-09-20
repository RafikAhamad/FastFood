import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.ff_logo} style={{width:'173px', height:'34'}} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus architecto ullam eos. Quaerat qui voluptatem a quod, maiores quibusdam aperiam officiis ut quos consectetur ex dolorem atque placeat non ducimus!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>   
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91623546552</li>
            <li>contact@fastfood.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 @ Fastfood.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer