import Image from 'next/image'
import React from 'react'
import style from '../../../styles/pro/pro.css'
import media from '../../../styles/pro/mediaPro.css'

function ProCard() {

    const proCardInfo = [
        { id: 1, img: '/imgs/img-pro.png', title: 'کارت هوشمندتو طراحی کن', desc: 'با چند تا کلیک میتونی کارت هوشمندتو اونجوری که دوست داری طراحی کنی حوصله هم نداشتی میتونی بسپاریش به خودمون.' },
        { id: 2, img: '/imgs/img-pro.png', title: 'فروشگاه خودتو راه اندازی کن', desc: 'میتونی تو فلت فروشگاه خودتو داشته باشی و محصولاتو اضافه کنی و خیلی راحت اونارو به فروش برسونی.' },
        { id: 3, img: '/imgs/img-pro.png', title: 'باشگاه مشتریانتو راه بنداز', desc: 'مشتریای ثابتتو نگه دار و شماره تلفنشونو آرشیو کن  تا بتونی بعداً براشون پیام بفرستی یا از تخفیفاتت با خبرشون کنی!' },
        { id: 4, img: '/imgs/img-pro.png', title: 'آمار پروفایلتو داشته باش', desc: 'آمار دقیق بازدید پروفایلت زیر دستته! بررسی کن ببین از کجا بیشتر ورودی گرفتی و چه محصولت بیشتر بازدید خورده.' },
        { id: 5, img: '/imgs/img-pro.png', title: 'دامنه اختصاصی اضافه کن', desc: 'شما میتونید دامنه اختصاصی خودتون رو اضافه کنید و پروفایلتون رو روی دامنه خودتون فیکس کنید.' },
        { id: 6, img: '/imgs/img-pro.png', title: 'پروفایل بیشتر داشته باش', desc: 'اکه برای کسب و کارت نیاز داشتی پروفایل دیگه اضافه کنی خیلی راحت میتونی این کارو انجام بدی و از همه خدمات فلت استفاده کنی!' }
    ]

    return (
            <>
                {proCardInfo.map((card) => (
                    <div className='pro-card' key={card.id}>
                        <Image src={card.img} width={500} height={500} alt='icon' className='imgs-pro-cards' />
                        <h2 className='titles-pros-cards'>{card.title}</h2>
                        <p className='descs-pro-cards'>{card.desc}</p>
                    </div>
                ))}
            </>
    )
}

export default ProCard