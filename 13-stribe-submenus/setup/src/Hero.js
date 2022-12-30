import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu, openSidebar} = useGlobalContext();

  return <section className='hero' onMouseOver={closeSubmenu}>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1>
          Payments infrastructure <br />
          for the internet
        </h1>
        <p>Millions of businesses of all sizes, from startups to large corporations, 
          use Stripe's software and APIs to accept payments, make transfers, and run
          their online businesses.</p>
          <button className='btn'>Start now</button>
          {/* <button className='btn' onClick={openSidebar}>Start now</button> */}
      </article>
      <article className='hero-images'>
        <img src={phoneImg} className='phone-img' alt='phone'/>
      </article>
    </div>
  </section>
}

export default Hero
