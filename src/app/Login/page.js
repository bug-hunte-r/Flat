import React from 'react'
import style from '../../../styles/login/login.css'
import media from '../../../styles/login/mediaLogin.css'
import Image from 'next/image'

function Login() {
  return (
    <div className='sub-container'>
      <div className='container-login-form'>
        <Image src={'/imgs/logo.png'} width={100} height={100} alt='logo' />
        <h4 className='title-login-form'>ورود</h4>
        <p>سلام! <br /> لطفاً شماره موبایل خود را وارد کنید.</p>
        <input type='number' placeholder='09' className='input-login-form' />
        <button className='btn-login-form'>ورود</button>
      </div>
    </div>
  )
}

export default Login