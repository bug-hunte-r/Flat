import React from 'react'
import style from '../../../styles/Users-Prof/Users-Prof.css'
import media from '../../../styles/Users-Prof/mediaUsers-Prof.css'
import Image from 'next/image'
import Link from 'next/link'

function Users() {
    return (
        <div className='user-info'>
            <Image src={'/imgs/user-img.png'} width={100} height={100} alt='user-img' className='user-img' />
            <p className='users-name'>Farid J</p>
            <Link className='users-profile-address' href={'/'}>Flatl.ink/Farid</Link>
        </div>
    )
}

export default Users