import React from 'react'
import IconImg from '../assets/icon.png'
import MapImg from '../assets/map.png'
import MiniImg from '../assets/minip.png'
import GpsImg from '../assets/gps 1.png'
import TwoImg from '../assets/insta.png'
import ThreeImg from '../assets/facebook.png'
import FourImg from '../assets/twitter.png'
import FiveImg from '../assets/linkedin.png'

function Contactus() {
    return (
        <section>
            <div className='bg-white h-[750px]'>
                <div className='flex max-w-[1173px] mx-auto justify-between pt-[168px]'>
                    <div>
                        <img src={IconImg} alt="" />
                        <p className='text-[45px] font-semibold'>Let's Collaborate</p>
                        <p className='text-[20px] max-w-[437px] mx-auto'>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>

                    <div>
                        <img src={MapImg} alt="" />
                    </div>
                </div>

                <div className='flex max-w-[1173px] mx-auto justify-between mt-[60px]'>
                    <div>
                        <p className='pl-[20px]'>Follow us</p>
                        <div className='flex mt-[18px]'>
                            <img src={ThreeImg} alt="" />
                            <img src={TwoImg} alt="" />
                            <img src={FourImg} alt="" />
                            <img src={FiveImg} alt="" />
                        </div>
                    </div>

                    <div className='flex gap-x-[25px] items-center'>
                        <img src={MiniImg} alt="" className='w-5 h-5' />
                        <p>+94 4444 5555 6</p>
                    </div>

                    <div className='flex gap-x-[19px] items-center'>
                        <img src={GpsImg} alt="" className='w-5 h-5' />
                        <p>but also the leap into electronic typesetting</p>
                    </div>
                </div>
            </div>

            <div className='bg-mainColor/10 h-[720px]'>
                <div className='max-w-[432px] mx-auto text-center pt-[54px]'>
                    <p className='text-[30px]'>Say hello</p>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>

                <div className='max-w-[671px] mx-auto mt-[79px]'>
                <div className='flex gap-x-[27px] w-full'>
                    <div className='w-full'>
                        <p>First Name</p>
                        <input type="text" name="" id=""
                            class="bg-white border px-2 py-3 rounded-[10px] text-[16px] placeholder:text-[16px]"></input>
                    </div>

                    <div className='w-full'>
                        <p>Last Name</p>
                        <input type="text" name="" id=""
                            class="bg-white px-2 py-3 rounded-[10px] text-[16px] placeholder:text-[16px] w-full"></input>
                    </div>
                </div>

                <div>
                    <p>Email Address</p>
                    <input type="text" name="" id=""
                            class="bg-white px-2 py-3 rounded-[10px] text-[16px] placeholder:text-[16px] w-full"></input>
                </div>

                <div>
                    <p>Message</p>
                    <textarea name="" id="" cols="30" rows="10" className='w-full px-2'></textarea>
                </div>
                </div>
            </div>

            
        </section>
    )
}

export default Contactus