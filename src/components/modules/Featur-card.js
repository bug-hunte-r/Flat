import React from 'react'
import style from '../../../styles/feature/feature.css'
import media from '../../../styles/feature/mediaFeature.css'
import Image from 'next/image'

function FeaturCard() {

    const featureCardsInfo = [
        { id: 1, img: '/imgs/heart.gif', title: 'پروفایل رایگان برای همیشه', desc: 'بیش از چند لینک داخل بیو اینستات قرار بده طراحی پروفایلتو به دلخواه خودت انجام بده و لذتشو ببر. این قابلیت برای همیشه رایگانه!' },
        { id: 2, img: '/imgs/nfc.gif', title: 'کارت ویزیت هوشمند', desc: 'به کمک NFC تعبیه شده در محصولات فلت، اطلاعات خودتون یا کسب و کارتون رو به سرعت و سادگی به گوشی مخاطبتون انتقال بدید.' },
        { id: 3, img: '/imgs/magnifying.gif', title: 'قابل یافت در گوگل', desc: 'مشتریان شما با جستجو نام و برند شما در گوگل به اطلاعات درج شده در صفحه شما دسترسی خواهد داشت.' },
        { id: 4, img: '/imgs/pen.gif', title: 'قابلیت تغییر اطلاعات', desc: 'در صورت تغییر مکان کسب و کارتون یا شماره تلفن یا هر اطلاعات دیگه شما میتونید صفحه اختصاصی خودتون رو به روز کنید.' },
        { id: 5, img: '/imgs/stars.gif', title: 'قابلیت سفارشی سازی', desc: 'از بین بیش از 30 تم زیبا و جذاب یکیو انتخاب کن یا خودت شروع به طراحی کن و پروفایلتو اونجوری که دلت میخواد بساز.' },
        { id: 6, img: '/imgs/truck.gif', title: 'ارسال رایگان', desc: 'شمال باشی یا جنوب، غرب باشی یا شرق. فرقی نمیکنه که کجای ایران باشید. ارسال به کل کشور رایگان هست!' }
    ]

    return (
        <>
            {featureCardsInfo.map((card) => (
                <div className='feature-card'>
                    <Image src={card.img} width={500} height={500} alt='icon' className='icons-feature-cards' />
                    <h2 className='titles-features-cards'>{card.title}</h2>
                    <p className='descs-feature-cards'>{card.desc}</p>
                </div>
            ))}
        </>
    )
}

export default FeaturCard