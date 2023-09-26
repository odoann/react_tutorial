import React from 'react'
import FirstImg from '../assets/img1.png'
import SubImg from '../assets/img2.png'
import MainImg from '../assets/img3.png'
import SecondImg from '../assets/img4.png'
import ThirdImg from '../assets/web1.png'
import FourthImg from '../assets/web2.png'
import FifthImg from '../assets/web3.png'
import SixthImg from '../assets/web4.png'
import SeventhImg from '../assets/man1.png'
import EigthImg from '../assets/man2.png'
import NineImg from '../assets/man3.png'
import TenImg from '../assets/man4.png'
import CTA from '../components/CTA'

function AboutUs() {
  return (
    <section>

      <div className='bg-bgColor h-[430vh]'>
        <div className='flex max-w-[1219px] mx-auto justify-between'>

          <div className='mt-[243px]'>
            <img src={FirstImg} alt='' />
          </div>

          <div className='mt-[156px]'>
            <img src={SubImg} alt='' />
          </div>

          <div className='mt-[169px] max-w-[565px]'>
            <p className='text-mainColor text-[25px]'>About us</p>
            <p className='text-[40px] font-semibold mt-[19px]'>Lorem Ipsum is simply dummy text of the printing.</p>
            <p className='text-[18px] text-textColor2 mt-[37px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          </div>

        </div>

        <div className='flex mt-[60px] max-w-[1114px] mx-auto justify-between'>
          <img src={MainImg} alt='' />
          <img src={SecondImg} alt='' />
        </div>

        <div className='max-w-[1200px] mx-auto mt-[220px]'>
          <p className='text-[45px] pr-[300px] text-mainColor'>Lorem Ipsum is simply dummy text of the printing.</p>
          <p className='text-[20px] pr-[200px] text-bg1Color mt-[48px]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS. We build and develop mobile applications for several top platforms, including Android & IOS.</p>
        </div>

        <div className='flex ml-[80px] justify-between mt-[178px]'>
          <div className='max-w-[499px]'>
            <p className='text-[30px] font-semibold'>Lorem Ipsum is simply dummy text of the printing.</p>
            <p className='text-[20px] text-bg1Color mt-[30px]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects.</p>

            <button className='text-mainColor border border-mainColor rounded-[10px] py-1 px-6 mt-[60px] text-[16px]'>Contact us</button>
          </div>

          <div className='border bg-white w-[500px] h-[300px]'>
            <div className='flex gap-x-[90px] mt-[65px] ml-[50px]'>
              <div className='flex items-center gap-x-[22px]'>
                <img src={ThirdImg} alt="" className='rounded-[10px] border-8 border-fourthColor' />
                <p>Web Application</p>
              </div>

              <div className='flex items-center gap-x-[22px]'>
                <img src={FourthImg} alt="" className='rounded-[10px] border-8 border-thirdColor' />
                <p className='text-center'>SEO</p>
              </div>

            </div>

            <div className='flex gap-x-[70px] mt-[55px] ml-[50px]'>
              <div className='flex items-center gap-x-[22px]'>
                <img src={FifthImg} alt="" className='rounded-[10px] border-8 border-secondColor px-2.5' />
                <p className='text-center'>Mobile Application</p>
              </div>

              <div className='flex items-center gap-x-[22px]'>
                <img src={SixthImg} alt="" className='rounded-[10px] border-8 border-fourthColor' />
                <p className='text-center'>AR/VR</p>
              </div>

            </div>

          </div>

        </div>

        <div className='ml-[80px]'>
          <div className='mt-[140px] text-[25px]'>
            <p>Our Team</p>
          </div>

          <div className='flex justify-between mt-[70px]'>
            <div>
              <img src={SeventhImg} alt="" />
              <p className='mt-[23px]'>CEO</p>
              <p className='mt-[9px]'>John Kabras</p>
            </div>

            <div>
              <img src={EigthImg} alt="" />
              <p className='mt-[23px]'>COO</p>
              <p className='mt-[9px]'>Philips shene moris</p>
            </div>

            <div>
              <img src={NineImg} alt="" />
              <p className='mt-[23px]'>Tech lead</p>
              <p className='mt-[9px]'>Equarn shamir mohomad</p>
            </div>

            <div>
              <img src={TenImg} alt="" />
              <p className='mt-[23px]'>Head of UX</p>
              <p className='mt-[9px]'>Janka indrajith</p>
            </div>
          </div>

        </div>

      </div>

      <CTA />

    </section>


  )
}

export default AboutUs