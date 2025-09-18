"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import style from '../../../styles/navbar/nav.css'
import media from '../../../styles/navbar/mediaNav.css'
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='container'>
      <div className='container-navbar'>

        <IoIosMenu className='icon-hamberger-menu' onClick={() => setIsMenuOpen(true)} />

        <div className={`right-sec-navbar ${isMenuOpen ? 'open-menu' : 'close-menu'}`}>
          <IoClose className='icon-close-menu' onClick={() => setIsMenuOpen(false)} />
          <Image src={'/imgs/logo.png'} width={600} height={600} alt='logo' className='logo' />
          <Link href={'/'} className='nav-links'>فلت کارت</Link>
          <Link href={'/'} className='nav-links'>فروشگاه</Link>
          <Link href={'/'} className='nav-links'>پلن ها</Link>
          <Link href={'/'} className='nav-links'>اکسپلور</Link>
          <Link href={'/'} className='nav-links'>سوالات متداول</Link>
        </div>

        <div className='left-sec-navbar'>
          <Link href={'/Login'} className='login-btn'>ورود</Link>
          <Link href={'/Signup'} className='signup-btn'>ثبت نام</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar