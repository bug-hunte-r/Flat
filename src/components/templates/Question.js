"use client"
import React, { useState } from 'react'
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import style from '../../../styles/question/question.css'
import media from '../../../styles/question/mediaQuestion.css'

function Question() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='sub-container'>

            <div className='container-questions'>

                <div className='container-acor'>
                    <h2 className='title-questions-section'>جواب همه سوالات اینجاست...</h2>

                        <Accordion
                            expanded={expanded === 'panel1'}
                            onChange={handleChange('panel1')}
                            sx={[
                                expanded === 'panel1'
                                    ? {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 'auto',
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'block',
                                        },
                                    }
                                    : {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 0,
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'none',
                                        },
                                    },
                            ]}
                        >

                            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" >
                                <Typography component="span" className='texts-acor'>کارت ویزیت هوشمند چیست؟</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='desc-acor'>
                                    کارت ویزیت هوشمند یا کارت ویزیت NFC کارتی از جنس پلاستیک فشرده به اصطلاح PVC که ضخامت آن به 760 میکرون میرسه. داخل این کارت یک مدار و یک چیپ به نام NFC وجود داره که قابلیت ذخیره سازی اطلاعات رو درون خودش داره. فضای ذخیره سازی این کارت بینهایت هستش و شما میتونید در این فضا امکانات نامحدودی قرار بدید تا بتونید ارتباط با مشتریانتون رو مداوم تر کنید.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === 'panel2'}
                            onChange={handleChange('panel2')}
                            sx={[
                                expanded === 'panel2'
                                    ? {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 'auto',
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'block',
                                        },
                                    }
                                    : {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 0,
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'none',
                                        },
                                    },
                            ]}
                        >

                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography component="span"  className='texts-acor'>با خرید کارت ویزیت هوشمند چه امکاناتی دریافت میکنم؟</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography  className='desc-acor'>
                                    ما در مجموعه فلت امکانات بیشماری رو براتون در نظر گرفتیم. برخی از مهمترین امکانات عبارتند از قابلیت درج شماره موبایل، شماره تماس، شبکه های پیام رسان داخلی و خارجی، لینک شبکه های اجتماعی، قابلیت اضافه کردن شماره کارت، آدرس (متنی یا لوکیشن)، گالری تصاویر، ویدیو، ذخیره در مخاطبین، فروشگاه ساز، باشگاه مشتریان، آمار پروفایل و...
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === 'panel3'}
                            onChange={handleChange('panel3')}
                            sx={[
                                expanded === 'panel3'
                                    ? {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 'auto',
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'block',
                                        },
                                    }
                                    : {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 0,
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'none',
                                        },
                                    },
                            ]}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography component="span" className='texts-acor'>نیاز به نصب برنامه خاصی هست؟</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='desc-acor'>
                                    به هیچ عنوان. شما فقط کافیه کارت رو به گوشی مخاطبتون که قابلیت NFC داره نزدیک کنید تا به تمامی اطلاعات تماس شما دسترسی داشته باشه. بیش از 90 درصد گوشی های حال حاضر در بازار این قابلیت رو دارن. حالا ما فکر اون 10 درصد رو هم کردیم. پشت کارت QR Code اختصاصی شما چاپ میشه تا اون دسته از افرادی که این قابلیت رو درون گوشی ندارن بتونن با اسکن کردن کد QR به صفجه شما دسترسی داشته باشن.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === 'panel4'}
                            onChange={handleChange('panel4')}
                            sx={[
                                expanded === 'panel4'
                                    ? {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 'auto',
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'block',
                                        },
                                    }
                                    : {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 0,
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'none',
                                        },
                                    },
                            ]}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography component="span" className='texts-acor'>خدمات فلت کارت پشتیبانی داره؟</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='desc-acor'>
                                    بله؛ کارشناسان فلت کارت همه روزه حتی ایام تعطیل از ساعت 9 الی 24 آماده پاسخگویی و رفع اشکلات احتمالی شما هستن.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === 'panel5'}
                            onChange={handleChange('panel5')}
                            sx={[
                                expanded === 'panel5'
                                    ? {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 'auto',
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'block',
                                        },
                                    }
                                    : {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 0,
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'none',
                                        },
                                    },
                            ]}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography component="span" className='texts-acor'>چقد طول میکشه محصول دستمون برسه؟</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='desc-acor'>
                                    اگه طراحی کارت رو خودتون انجام بدید در 1 روز کاری کارت تحویل پست یا تیپاکس داده میشه.
                                    در غیر این صورت طراحی، چاپ و آماده سازی کارتهای هوشمند حداقل 4 روز کاری زمان میبره.طراحی، تولید و چاپ استند هوشمند حداقل 10 روز کاری.
                                    زمان مورد نیاز تا تحویل مرسوله توسط پست یا تیپاکس به شما بستگی به شهر سکونتتون بین 2 الی 7 روز کاری.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === 'panel6'}
                            onChange={handleChange('panel6')}
                            sx={[
                                expanded === 'panel6'
                                    ? {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 'auto',
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'block',
                                        },
                                    }
                                    : {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 0,
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'none',
                                        },
                                    },
                            ]}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography component="span" className='texts-acor'>میتونیم خودمون کارتمون رو طراحی کنیم؟</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='desc-acor'>
                                    بله؛ شما میتونید به صورت آنلاین طرح کارت خودتون رو طراحی کنید.
                                    یا در صورتی که مسلط به یکی از برنامه های گرافیکی هستید میتونید طرح چاپی کارت یا استندتون رو خودتون برامون ارسال کنید.
                                    سایز استاندارد کارت های هوشمند 5.4 * 8.6
                                    سایز استاندارد استند هوشمند 16 * 10.5
                                    در صورتی که توانایی طراحی صفحه وب پروفایل رو هم دارید میتونید بخش گرافیکی پروفایل خودتون رو طراحی کنید تا ما براتون اجرا کنیم.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === 'panel7'}
                            onChange={handleChange('panel7')}
                            sx={[
                                expanded === 'panel7'
                                    ? {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 'auto',
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'block',
                                        },
                                    }
                                    : {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 0,
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'none',
                                        },
                                    },
                            ]}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography component="span" className='texts-acor'>میتونیم اطلاعات پروفایل رو عوض کنیم؟</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='desc-acor'>
                                    قطعاً یکی از اصلی ترین وجود کارت های هوشمند همین موضوع هست. بله شما میتونید به دفعات نامحدود و به صورت رایگان پروفایلتون رو ویرایش کنید.
                                    جهت ویرایش پروفایل وارد بخش داشبورد در وبسایت بشید و ویرایش پروفایل رو انتخاب کنید.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === 'panel8'}
                            onChange={handleChange('panel8')}
                            sx={[
                                expanded === 'panel8'
                                    ? {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 'auto',
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'block',
                                        },
                                    }
                                    : {
                                        [`& .${accordionClasses.region}`]: {
                                            height: 0,
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                            display: 'none',
                                        },
                                    },
                            ]}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography component="span" className='texts-acor'>ارسال همه محصولات رایگان هست؟</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='desc-acor'>
                                    ارسال همه محصولات به کل ایران توسط پست رایگان هست.
                                    دوستانی هم که درخواست ارسال با تیپاکس، اتوبوس یا باربری رو دارن هزینه ارسال بر عهده خودشون هست.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                </div>

                <div className='container-question-form'>
                    <h2 className='title-question-form'>مشاوره رایگان</h2>
                    <p className='desc-question-form'>اگه جواب سوالتو پیدا نکردی یا راهنمایی نیاز داشتی شمارتو برامون بفرست، ما باهات تماس میگیریم.</p>
                    <input type='text' placeholder='نام و نام خانوادگی' className='input-question-form' />
                    <input type='number' placeholder='شماره تماس' className='input-question-form' />
                    <input type='text' placeholder='چه زمانی باهاتون تماس بگیریم؟' className='input-question-form' />
                    <button className='btn-question-form'>ارسال</button>
                </div>

            </div>
        </div >
    )
}

export default Question