import React from 'react'
import TwoImg from '../../assets/insta.png'
import ThreeImg from '../../assets/facebook.png'
import FourImg from '../../assets/twitter.png'
import FiveImg from '../../assets/linkedin.png'

function Footer() {
  return (
    <div>
      <div className='flex max-w-[1219px] mx-auto mt-[62px] text-[16px] gap-x-[80px]'>
        <div>
          <p className='text-lastColor font-bold'>LOGO</p>
          <p className='text-img3Color mt-[25px] max-w-[372px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          <p className='text-img3Color mt-[25px]'>@Lorem</p>
        </div>

        <div>
          <p>About us</p>
          <div className='mt-[25px]'>
            <p className='text-img3Color'>Lorem</p>
            <p className='text-img3Color'>Portfolio</p>
            <p className='text-img3Color'>Careers</p>
            <p className='text-img3Color'>Contact us</p>
          </div>
        </div>

        <div className='max-w-[282px]'>
          <p>Contact us</p>
          <p className='text-img3Color mt-[25px]'>Lorem is simply dummy text of the printing and typesetting industry.</p>
          <p className='text-img3Color mt-[20px]'>+908 89097 890</p>
        </div>

        <div className='flex mt-[100px]'>
          <img src={ThreeImg} alt="" />
          <img src={TwoImg} alt="" />
          <img src={FourImg} alt="" />
          <img src={FiveImg} alt="" />
        </div>



      </div>

      <div className='text-center text-[13px] text-text2Color mt-[80px]'>
        <p>Copyright 2023 Lorem All rights Recerved</p>
      </div>
    </div>





  )
}

export default Footer