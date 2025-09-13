import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='container-navbar'>

      <div className='right-sec-navbar'>
      <Image src={'/imgs/logo.png'} width={600} height={600} alt='logo' className='logo'/>
      <Link href={'#'}>فلت کارت</Link>
      <Link href={'#'}>فروشگاه</Link>
      <Link href={'#'}>پلن ها</Link>
      <Link href={'#'}>اکسپلور</Link>
      <Link href={'#'}>سوالات متداول</Link>
      </div>

      <div className='left-sec-navbar'>
        <Link href={'#'}>ورود</Link>
        <Link href={'#'}>ثبت نام</Link>
      </div>

    </div>
  )
}

export default Navbar