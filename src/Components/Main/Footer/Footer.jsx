import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="Footer_start">
        <ul>
            <h3>Home</h3>
            <br />
            <li>Categories</li>
            <li>Devices</li>
            <li>Pricing</li>
            <li>FAQ</li>
        </ul>
        <ul>
            <h3>Movies</h3>
            <br />
            <li>Gernes</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
        </ul>
        <ul>
            <h3>Shows</h3>
            <br />
            <li>Gernes</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
        </ul>
        <ul>
            <h3>Support</h3>
            <br />
            <li>Contact Us</li>
        </ul>
        <ul>
            <h3>Subscription</h3>
            <br />
            <li>Plans</li>
            <li>Features</li>
        </ul>
        <ul>
            <h3>Connect With Us</h3>
            <br />
            <div className="icons">
                <i className='fa-brands fa-facebook'></i>
                <i className='fa-brands fa-instagram'></i>
                <i className='fa-brands fa-linkedin'></i>
            </div>
        </ul>
      </div>
      <div className="Footer_end">
        <div className="Footer_end_left">
            <h4>@2025 StreamVibe, All Rights Reserved</h4>
        </div>
        <div className="Footer_end_right">
            <ul>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer