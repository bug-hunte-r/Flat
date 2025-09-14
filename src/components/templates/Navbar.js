import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '../../../styles/navbar/nav.css'

function Navbar() {
  return (
    <div className='container-navbar'>

      <div className='right-sec-navbar'>
      <Image src={'/imgs/logo.png'} width={600} height={600} alt='logo' className='logo'/>
      <Link href={'/'} className='nav-links'>فلت کارت</Link>
      <Link href={'/'} className='nav-links'>فروشگاه</Link>
      <Link href={'/'} className='nav-links'>پلن ها</Link>
      <Link href={'/'} className='nav-links'>اکسپلور</Link>
      <Link href={'/'} className='nav-links'>سوالات متداول</Link>
      </div>

      <div className='left-sec-navbar'>
        <Link href={'/'} className='login-btn'>ورود</Link>
        <Link href={'/'} className='signup-btn'>ثبت نام</Link>
      </div>

    </div>
  )
}

export default Navbar