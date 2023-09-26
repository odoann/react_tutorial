import React from 'react'
import FirstImg from '../assets/bell1.png'
import ThirdImg from '../assets/web1.png'
import FourthImg from '../assets/web2.png'
import FifthImg from '../assets/web3.png'
import SixthImg from '../assets/web4.png'
import HumanImg from '../assets/human.png'
import DateImg from '../assets/d1.png'
import DatesImg from '../assets/d2.png'
import DataImg from '../assets/d3.png'

import CTA from '../components/CTA'

function Services() {
    return (
        <section>
            <div className='relative bg-mainColor/10 h-[720px]'>
                <div>
                    <img src={FirstImg} alt="" className='pt-[78px] max-w-[135px] mx-auto' />
                    <p className='mt-[22px] max-w-[254px] mx-auto text-center text-[40px]'>Our <span className='text-mainColor'>Services</span></p>
                    <p className='mt-[18px] max-w-[350px] mx-auto text-center text-[16px] text-img3Color'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>

                <div className='absolute border bg-white ml-[80px] w-[1203px] h-[421px] mt-[71px]'>
                    <div className='max-w-[1059px] mx-auto'>
                        <div className='flex justify-between mt-[65px]'>
                            <div className='flex items-center max-w-[453px] gap-x-[39px]'>
                                <img src={FifthImg} alt="" className='rounded-[10px] border-8 border-secondColor px-2.5' />
                                <div>
                                    <p className='text-[25px]'>Mobile Applications</p>
                                    <p className='text-[16px]'>The simplest but robust technology to accompany with you</p>
                                </div>
                            </div>

                            <div className='flex items-center max-w-[485px] gap-x-[39px]'>
                                <img src={ThirdImg} alt="" className='rounded-[10px] border-8 border-fourthColor' />
                                <div>
                                    <p className='text-[25px]'>Web Application</p>
                                    <p className='text-[16px]'>Platform independant business solutions for maximum availability</p>
                                </div>
                            </div>

                        </div>

                        <div className='flex justify-between mt-[70px] '>
                            <div className='flex items-center max-w-[413px] gap-x-[39px]'>
                                <img src={FourthImg} alt="" className='rounded-[10px] border-8 border-thirdColor' />
                                <div>
                                    <p className='text-[25px]'>SEO</p>
                                    <p className='text-[16px]'>Let the word find you on top of others</p>
                                </div>
                            </div>

                            <div className='flex items-center max-w-[485px] gap-x-[31px]'>
                                <img src={SixthImg} alt="" className='rounded-[10px] border-8 border-fourthColor' />
                                <div>
                                    <p className='text-[25px]'>AR/VR Solutions</p>
                                    <p className='text-[16px]'>Advanced autonamous technologies to make life simple</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className='bg-semiColor h-[600px] mt-[249px]'>
                <div className='flex max-w-[1301px] mx-auto justify-between pr-[60px]'>
                    <div className='mt-[43px] max-w-[450px] mx-auto'>
                        <p className='text-[30px] '> <span className='text-mainColor font-semibold'>Lorem Ipsum </span> is simply dummy text of the printing.</p>
                        <p className='text-[16px] text-textColor2 mt-[45px]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Andriod & IOS.</p>
                        <p className='text-[16px] text-textColor2 mt-[40px]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens</p>
                        <button className='text-mainColor border border-mainColor rounded-[10px] py-1 px-6 mt-[35px] text-[16px]'>Contact us</button>
                    </div>

                    <img src={HumanImg} alt="" className='mt-[55px]' />

                </div>
            </div>

            <div className='bg-mainColor h-[380px]'>
                <div className='flex text-white pt-[129px] max-w-[1084px] mx-auto justify-between'>
                    <div>
                        <p className='text-[65px] font-semibold text-center'>6</p>
                        <p>Happy Clients</p>
                    </div>

                    <div>
                        <p className='text-[65px] font-semibold text-center'>11</p>
                        <p>Completed Projects</p>
                    </div>

                    <div>
                        <p className='text-[65px] font-semibold'>7M</p>
                        <p>Transactions</p>
                    </div>

                    <div>
                        <p className='text-[65px] font-semibold'>6000+</p>
                        <p className='text-center'>Customers</p>
                    </div>
                </div>
            </div>

            <div className='bg-semiColor h-[700px]'>
                <div className='max-w-[1202px] mx-auto'>
                    <div className='mt-[94px] text-[36px]'>
                        <p>Our lastest Projects</p>
                    </div>

                    <div className='flex mt-[63px] justify-between'>
                        <div>
                            <img src={DateImg} alt="" />
                            <div className='max-w-[334px] mx-auto'>
                                <p className='mt-[40px] text-[23px]'>Lorem Ipsum is simply dummy text of the printing.</p>
                                <p className='mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div>
                            <img src={DatesImg} alt="" />
                            <div className='max-w-[334px] mx-auto mt-[40px]'>
                                <p className='mt-[40px] text-[23px]'>Lorem Ipsum is simply dummy text of the printing.</p>
                                <p className='mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                        <div>
                            <img src={DataImg} alt="" />
                            <div className='max-w-[334px] mx-auto'>
                                <p className='mt-[40px] text-[23px]'>Lorem Ipsum is simply dummy text of the printing.</p>
                                <p className='mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CTA />


        </section >
    )
}

export default Services