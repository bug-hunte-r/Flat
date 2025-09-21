"use client"
import React, { useEffect, useState } from 'react'
import style from '../../../styles/login/login.css'
import media from '../../../styles/login/mediaLogin.css'
import Image from 'next/image'
import { FaArrowLeft } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';

function Register() {

  const [isShowVerifyForm, setIsShowVerifyForm] = useState(false)
  const [isShowLoginForm, setIsShowLoginForm] = useState(true)

  const [phone, setPhone] = useState('')
  const [isPhonTrue, setIsPhoneTrue] = useState(false)
  const [code, setCode] = useState('')

  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const errorForPhoneNumber = () => toast.error('شماره موبایل نا معتبر است')
  const successForPhoneNumber = () => toast.success('کد تایید ارسال شد')

  const chackPhonNumber = () => {


    if (phone.length === 0 || phone.length < 11 || phone.length > 11) {
      errorForPhoneNumber()

    } else {
      setIsPhoneTrue(true)
      successForPhoneNumber()
    }

  }
  
  return (
    <div className='sub-container'>

      <div className={`sec-container ${isShowLoginForm || !isPhonTrue ? 'show-login-form' : 'Unshow-login-form'}`}>
        <div className='container-login-form'>
          <Image src={'/imgs/logo.png'} width={100} height={100} alt='logo' className='logo-login-form' />
          <h4 className='title-login-form'>ثبت نام / ورود</h4>
          <p className='text-login-form'>سلام! <br /> لطفاً شماره موبایل خود را وارد کنید.</p>
          <input type='number' placeholder='09' className='input-login-form' value={phone} onChange={event => setPhone(event.target.value)} />
          <button className='btn-login-form' onClick={() => { setIsShowVerifyForm(true); setIsShowLoginForm(false); setTimeLeft(120); chackPhonNumber() }}>ارسال</button>
        </div>
      </div>

      <div className={`sec-container-verify-code ${isShowVerifyForm && isPhonTrue ? 'show-verify-form' : 'Unshow-verify-form'}`}>
        <div className='container-login-form'>
          <div className='container-logo-and-icon'>
            <Image src={'/imgs/logo.png'} width={100} height={100} alt='logo' className='logo-login-form' />
            <FaArrowLeft className='icon-veryify' onClick={() => window.location.reload()} />
          </div>
          <h4 className='title-login-form'>کد تایید را وارد کنید</h4>
          <p className='text-login-form'>کد تایید برای شماره {phone} پیامک شد</p>
          <input type='number' className='input-login-form' value={code} onChange={event => setCode(event.target.value)} />
          <p className='timer'>{minutes}:{seconds < 10 ? `0${seconds}` : seconds} مانده تا دریافت مجدد کد</p>
          <button className={`btn-login-form ${timeLeft > 0 ? 'show-ok-btn' : 'Unshow-ok-btn'}`}>تایید</button>
          <button className={`btn-login-form ${timeLeft === 0 ? 'show-resend-btn' : 'Unshow-resend-btn'}`} onClick={() => setTimeLeft(120)}>دریافت مجدد کد</button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </div>
  )
}

export default Register