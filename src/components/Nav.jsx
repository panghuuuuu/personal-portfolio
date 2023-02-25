import React from 'react'
import '../stylesheets/nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
const Nav = () => {
  return (
    <nav>
    <a href='#'><AiOutlineHome/></a>
    <a href='#about'><AiOutlineUser /></a>
    <a href='#experience'><BiBook /></a>
    <a href='#services'><RiServiceLine /></a>
    <a href='#contact'><AiOutlineMessage /></a>
    </nav>

  )
}

export default Nav