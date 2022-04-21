import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join the Adventure newsletter to receive
          our best vacation deals</p>
        <p className="footer-subscription-text"> You can unsubscribe at any time.</p>
        <div className="input-areas">
          <form>
            <input type='email' name='email' placeholder='Your Email' className='footer-input' />
            <Button buttonStyle='btn--outline'>Subscribe!</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Landing Page
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Landing Page © 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/daniel-rmendes/'
              target='_blank' rel="noreferrer"

            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/danmndes/'
              target='_blank' rel="noreferrer"
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link github'
              href='https://github.com/danmndes'
              target='_blank' rel="noreferrer">
              <i class='fab fa-github' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;