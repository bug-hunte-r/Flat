import React from 'react'
import style from '../../../styles/footer/footer.css'
import nedia from '../../../styles/footer/mediaFooter.css'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    return (
        <div className='sub-container'>
            <div className='container-footer'>

                <div className='container-about-flat'>
                    <h4 className='about-flat-title'>خلاصه ای از فلت کارت</h4>
                    <p className='text-about-flat'>فلت کارت در سال ۱401 با هدف بهبود ارتباطات در کسب و کارها و همچنین اجتماع شروع به فعالیت کرده و حال در پلتفرم جدید با قابلیت ها متعدد در خدمت شماست. تلاش مجموعه کارتینو بر حضور پر رنگ تر و قوی تر در حوزه‌های تبلیغات کسب و کار‌ها می‌باشد.</p>
                </div>

                <div className='container-rich-quick'>
                    <h4 className='title-rich-quick'>دسترسی سریع</h4>
                    <Link href={'/'}>اکسپلور</Link>
                    <Link href={'/'}>قوانین و مقررات</Link>
                    <Link href={'/'}>خدمات</Link>
                    <Link href={'/'}>تماس با فلت کارت</Link>
                </div>

                <div className='container-social'>
                    <h4 className='title-social'>شبکه های اجتماعی</h4>
                    <button className='btn-social'><a className='link-social'>اینستاگرام</a></button>
                    <button className='btn-social'><a className='link-social'>تلگرام</a></button>
                    <button className='btn-social'><a className='link-social'>واتس اپ</a></button>
                </div>

                <div className='container-avatars'>
                    <h4 className='title-avatars'>نمادها و مجوزها</h4>
                    <div className='container-avatars-img'>
                        <Image src={'/imgs/avatar.png'} width={100} height={100} alt='avatart' />
                        <Image src={'/imgs/avatar.png'} width={100} height={100} alt='avatart' />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer