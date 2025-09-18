import React from 'react'
import style from '../../../styles/feature/feature.css'
import media from '../../../styles/feature/mediaFeature.css'
import FeaturCard from '../modules/Featur-card'

function Feature() {

  return (
    <div className='container'>
      <div className='sub-container'>
        <h1 className='title-features'>ویژگی های فلت</h1>

        <div className='container-features-cards'>
          <FeaturCard />
        </div>
      </div>
    </div>
  )
}

export default Feature