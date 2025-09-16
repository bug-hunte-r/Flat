import React from 'react'
import style from '../../../styles/Users-Prof/Users-Prof.css'
import media from '../../../styles/Users-Prof/mediaUsers-Prof.css'
import Link from 'next/link'
import Users from '../modules/Users'

function UsersProf() {
  return (
    <div className='sub-container'>
        <div className='container-user-prof'>
            <h2 className='title-user-prof'>بیش از 1000 پروفایل در فلت</h2>
            <p className='sub-title-user-prof'>برترین پروفایل های طراحی شده توسط شما </p>
            <Link href={'/'} className='see-more-btn-users-profile'>نمایش بیشتر در اکسپلور</Link>
            <div className='container-users-info'>
                <Users />
                <Users />
                <Users />
                <Users />
                <Users />
            </div>
        </div>
    </div>
  )
}

export default UsersProf