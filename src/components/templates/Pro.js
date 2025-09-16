import React from 'react'
import style from '../../../styles/pro/pro.css'
import media from '../../../styles/pro/mediaPro.css'
import ProCard from '../modules/Pro-card'

function Pro() {
  return (
    <div className='sub-container'>
      <div className='black-container-pro'>

        <h2 className='title-pro-cards'>حرفه ای برای تویی که بیشتر از یک پروفایل میخوای!</h2>

        <div className='container-pro-cards'>
          <ProCard />
        </div>

      </div>
    </div>
  )
}

export default Pro