import React from 'react'
import style from '../../../styles/footer/footer.css'
import nedia from '../../../styles/footer/mediaFooter.css'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    return (
        <div className='container'>
            <div className='sub-container'>
                <div className='container-footer'>

                    <div className='container-right'>
                        <div className='container-about-flat'>
                            <h3 className='about-flat-title'>خلاصه ای از فلت کارت</h3>
                            <p className='text-about-flat'>فلت کارت در سال ۱401 با هدف بهبود ارتباطات در کسب و کارها و همچنین اجتماع شروع به فعالیت کرده و حال در پلتفرم جدید با قابلیت ها متعدد در خدمت شماست. تلاش مجموعه کارتینو بر حضور پر رنگ تر و قوی تر در حوزه‌های تبلیغات کسب و کار‌ها می‌باشد.</p>
                        </div>

                        <div className='container-rich-quick'>
                            <h3 className='title-rich-quick'>دسترسی سریع</h3>
                            <Link href={'/'} className='links-rich-quick'>اکسپلور</Link>
                            <br />
                            <Link href={'/'} className='links-rich-quick'>قوانین و مقررات</Link>
                            <br />
                            <Link href={'/'} className='links-rich-quick'>خدمات</Link>
                            <br />
                            <Link href={'/'} className='links-rich-quick'>تماس با فلت کارت</Link>
                        </div>
                    </div>

                    <div className='container-left'>
                        <div className='container-social'>
                            <h3 className='title-social'>شبکه های اجتماعی</h3>
                            <button className='btn-social'><a>اینستاگرام</a></button>
                            <br />
                            <button className='btn-social'><a>تلگرام</a></button>
                            <br />
                            <button className='btn-social'><a>واتس اپ</a></button>
                        </div>

                        <div className='container-avatars'>
                            <h3 className='title-avatars'>نمادها و مجوزها</h3>
                            <div className='container-avatars-img'>
                                <Image src={'/imgs/avatar.png'} width={100} height={100} alt='avatart' className='imgs-avatar' />
                                <Image src={'/imgs/avatar.png'} width={100} height={100} alt='avatart' className='imgs-avatar' />
                            </div>
                        </div>
                    </div>
                    <div className='container-un-footer'>
                        <h5 className='develop-from-me'>توسعه یافته توسط <a className='my-name' href='https://shayanjafarnejad.vercel.app' target="_blank">شایان جعفرنژاد</a></h5>
                        <h5 className='save-data-text'>تمامی حقوق این وبسایت متعلق به فلت کارت می باشد.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer