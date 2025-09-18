"use client"
import React, { useState } from 'react'
import style from '../../../styles/login/login.css'
import media from '../../../styles/login/mediaLogin.css'
import Image from 'next/image'
import { FaArrowLeft } from "react-icons/fa6";

function Signup() {

    const [isShowVerifyForm, setIsShowVerifyForm] = useState(false)
    const [isShowLoginForm, setIsShowLoginForm] = useState(true)

    return (
        <div className='sub-container'>
            <div className={`sec-container ${isShowLoginForm ? 'show-login-form' : 'Unshow-login-form'}`}>
                <div className='container-login-form'>
                    <Image src={'/imgs/logo.png'} width={100} height={100} alt='logo' className='logo-login-form' />
                    <h4 className='title-login-form'>ثبت نام</h4>
                    <p className='text-login-form'>سلام! <br /> لطفاً شماره موبایل خود را وارد کنید.</p>
                    <input type='number' placeholder='09' className='input-login-form' />
                    <button className='btn-login-form' onClick={() => { setIsShowVerifyForm(true); setIsShowLoginForm(false) }}>ثبت نام</button>
                </div>
            </div>

            <div className={`sec-container-verify-code ${isShowVerifyForm ? 'show-verify-form' : 'Unshow-verify-form'}`}>
                <div className='container-login-form'>
                    <div className='container-logo-and-icon'>
                        <Image src={'/imgs/logo.png'} width={100} height={100} alt='logo' className='logo-login-form' />
                        <FaArrowLeft className='icon-veryify' onClick={() => window.location.reload()} />
                    </div>
                    <h4 className='title-login-form'>کد تایید را وارد کنید</h4>
                    <p className='text-login-form'>کد تایید برای شماره ۰۹۱۴۴۳۴۸۵۵۴ پیامک شد</p>
                    <input type='number' className='input-login-form' />
                    <p className='timer'>2:00</p>
                    <button className='btn-login-form'>تایید</button>
                </div>
            </div>
        </div>
    )
}

export default Signup