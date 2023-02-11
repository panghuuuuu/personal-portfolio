import React from 'react'
import HeaderButtons from './HeaderButtons'
import HeaderSocials from './HeaderSocials'

import '../stylesheets/header.css'

// assets
import homepic from '../assets/homepic.png'

const Header = () => {
  return (
    <div className = 'container header__container'> 
    <div className= 'header_text'>
    <h5>Hello I'm</h5>
      <h1>Ysabella Panghulan</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
    </div>
      <HeaderButtons />
      <HeaderSocials />
      <div className='pic'>
        <img src={homepic} alt=''></img>
      </div>

      <a href='#contact' className='scroll_down'> Scroll Down</a>
    </div>
  )
}

export default Header