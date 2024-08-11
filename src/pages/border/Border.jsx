import React from 'react'
import TextCard from '../../components/textCard/TextCard'
import './border.css'

const Border = () => {

  return (
    <div className='centeredPage'>
        <section className='borderSection'>
            <div className='rainbowExample'>
                <TextCard title={'Animated Rainbow Border'}/>
            </div>
            <div className='serpentExample'>
                <TextCard title={'Hover me'}/>
            </div>
            <div className='threeDBackExample'>
                <button className='innerPartOfThreeDFront'>
                    <TextCard title={'Click me'}/>
                </button>
            </div>
            <div className='threeDBackExample'>
                <div className='innerPartOfThreeDBack'>
                    <TextCard title={'Behind the Page'}/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Border