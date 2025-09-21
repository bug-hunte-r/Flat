"use client"
import React, { useState } from 'react'
import style from '../../../styles/header/header.css'
import media from '../../../styles/header/mediaHeader.css'
import Image from 'next/image'

function Header() {

    const [flatInput, setFlatInput] = useState('flatcard.net/')

    const handleChange = (e) => {
        let value = e.target.value;

        if (!value.startsWith("flatcard.net/")) {
            value = "flatcard.net/";
        }

        setFlatInput(value);
    };

    const searchLink = () => {
        console.log(flatInput);
    }

    return (
        <div className='container'>
            <div className='sub-container'>
                <div className='container-header'>
                    <Image src={'/imgs/header-img.png'} width={600} height={600} alt='header-img' className='imgs-header removed-img' />
                    <div className='container-texts-header'>
                        <h1 className='title-header'>همین الان پروفایل خودتو بساز!</h1>
                        <p className='sub-title-header'>رایگانه و کمتر از 2 دقیقه طول میکشه</p>
                        <div className='container-btn-and-input-header'>
                            <button className='btn-header' onClick={searchLink}>بزن بریم</button>
                            <input type='text' value={flatInput} onChange={handleChange} className='input-header' />
                        </div>
                    </div>
                    <Image src={'/imgs/header-img.png'} width={600} height={600} alt='header-img' className='imgs-header' />
                </div>
            </div>
        </div>
    )
}

export default Header