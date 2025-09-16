import React from 'react'
import style from '../../../styles/pro/pro.css'
import media from '../../../styles/pro/mediaPro.css'
import ProCard from '../modules/Pro-card'

function Pro() {
  return (
    <div className='sub-container'>

      <h2 className='title-pro-cards-section'><span className='bold'>حرفه ای</span> برای تویی که بیشتر از یک پروفایل میخوای!</h2>

      <div className='container-pro-cards'>
        <ProCard />
      </div>
    </div>
  )
}

export default Pro