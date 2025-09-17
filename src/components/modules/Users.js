import React from 'react'
import style from '../../../styles/Users-Prof/Users-Prof.css'
import media from '../../../styles/Users-Prof/mediaUsers-Prof.css'
import Image from 'next/image'
import Link from 'next/link'

function Users() {

    const usersInfo = [
        { id: 1, img: '/imgs/user-img.png', userName: 'Farid J', usersProfileAddress: 'Flatl.ink/Farid' },
        { id: 2, img: '/imgs/user-img.png', userName: 'Farid J', usersProfileAddress: 'Flatl.ink/Farid' },
        { id: 3, img: '/imgs/user-img.png', userName: 'Farid J', usersProfileAddress: 'Flatl.ink/Farid' },
        { id: 4, img: '/imgs/user-img.png', userName: 'Farid J', usersProfileAddress: 'Flatl.ink/Farid' },
        { id: 5, img: '/imgs/user-img.png', userName: 'Farid J', usersProfileAddress: 'Flatl.ink/Farid' },
    ]

    return (
        <>
            {usersInfo.map((user) => (
                <div className='user-info' key={user.id}>
                    <Image src={user.img} width={100} height={100} alt='user-img' className='user-img' />
                    <p className='users-name'>{user.userName}</p>
                    <Link className='users-profile-address' href={'/'}>{user.usersProfileAddress}</Link>
                </div>
            ))}
        </>
    )
}

export default Users