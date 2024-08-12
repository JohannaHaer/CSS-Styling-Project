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
            <div className='threeDExample'>
                <button className='innerPartOfThreeDFront'>
                    <TextCard title={'Click me'}/>
                </button>
            </div>
            <div className='threeDExample'>
                <div className='innerPartOfThreeDBack'>
                    <TextCard title={'Behind the Page'}/>
                </div>
            </div>
            <div className='glassmorphismExample'>
                <div className='confetti'></div>
                <div className='confetti'></div>
                <div className='confetti'></div>
                <div className='confetti'></div>
                <div className='confetti'></div>
                <div className='confetti'></div>
                <div className='confetti'></div>
                <div className='confetti'></div>
                <div className='confetti'></div>
                <div className='innerPartOfGlassmorphismConfetti'>
                    <TextCard title={'Glassmorphism'}/>
                </div>
            </div>
            <div className='glassmorphismHeartExample'>
                <div className='heart'></div>
                <div className='heart'></div>
                <div className='heart'></div>
                <div className='heart'></div>
                <div className='heart'></div>
                <div className='innerPartOfGlassmorphismHeart'>
                    <TextCard title={'Glassmorphism'}/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Border