import React from 'react'
import HeroImg from '../assets/work.png'
import NextImg from '../assets/tag1.png'
import SecondImg from '../assets/tag2.png'
import ThirdImg from '../assets/tag3.png'
import FourthImg from '../assets/tag4.png'
import FifthImg from '../assets/h1.png'
import sixthImg from '../assets/phone.png'
import seventhImg from '../assets/paper.png'
import ManImg from '../assets/man.png'
import OneImg from '../assets/1.png'

import CTA from '../components/CTA'

function Home() {
    return (
        <section>
            <div className='bg-mainColor/10 h-[720px] flex justify-center gap-14'>
                <div className='max-w-[630px] pt-[128px]'>
                    <p className='text-[40px] font-semibold'>Experienced <span className='text-mainColor'>mobile and web</span> applications and website builders measuring.</p>
                    <p className='text-[16px] text-textColor font-regular mt-[16px]'>KOTEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.</p>

                    <div className='flex gap-x-[15px] mt-[65px]'>
                        <div>
                            <button className=' bg-mainColor text-white px-10 py-1.5 text-center text-[16px] rounded-[10px]'>Contact us</button>
                        </div>

                        <div>
                            <button className='text-mainColor bg-white px-10 py-1.5 text-center text-[16px] rounded-[10px] border border-solid border-mainColor'>View more</button>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={HeroImg} alt='' />
                </div>

            </div>

            <div className='bg-white h-[500vh]'>
                <div className='flex max-w-[1187px] mx-auto mt-[38px] justify-between'>
                    <div className='gap-x-[31px]'>
                        <div className='flex gap-x-[16px]'>
                            <img src={NextImg} alt='' className='rounded-[10px] border-8 border-firstColor' />
                            <div>
                                <p className='text-[20px]'>Web Application</p>
                                <p className='text-[12px] text-subColor'>Lorem ipsum is simply</p>
                            </div>
                        </div>
                    </div>

                    <div className='gap-x-[31px]'>
                        <div className='flex gap-x-[16px]'>
                            <img src={SecondImg} alt='' className='rounded-[10px] border-8 border-secondColor' />
                            <div>
                                <p className='text-[20px]'>SEO</p>
                                <p className='text-[12px] text-subColor'>Lorem ipsum is simply</p>
                            </div>
                        </div>
                    </div>

                    <div className='gap-x-[31px]'>
                        <div className='flex gap-x-[16px]'>
                            <img src={ThirdImg} alt='' className='rounded-[10px] border-8 border-thirdColor' />
                            <div>
                                <p className='text-[20px]'>AR/VR Solutions</p>
                                <p className='text-[14px] text-subColor'>Lorem ipsum is simply</p>
                            </div>
                        </div>
                    </div>

                    <div className='gap-x-[31px]'>
                        <div className='flex gap-x-[16px]'>
                            <img src={FourthImg} alt='' className='rounded-[10px] border-8 border-fourthColor' />
                            <div>
                                <p className='text-[20px]'>Mobile Applications</p>
                                <p className='text-[12px] text-subColor'>Lorem ipsum is simply</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='mt-[115px]'>
                    <div className='max-w-[847px] mx-auto'>
                        <p className='text-[33px] font-semibold'>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>

                    <div className='max-w-[692px] mx-auto mt-[32px]'>
                        <p className='text-[18px] text-textColor2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p className='max-w-[450px] mx-auto text-[18px] text-textColor2'>Lorem Ipsum has been the industry's</p>
                    </div>

                </div>

                <div className='flex max-w-[1194px] mx-auto justify-between'>
                    <div className='max-w-[516px]'>
                        <div className='flex mt-[159px] items-center gap-x-[25px]'>
                            <img src={FifthImg} alt="" className='border border-imgColor rounded-full border-x-[10px] border-y-[10px]' />
                            <div>
                                <p className='text-[18px]'>Lorem Ipsum is simply dummy text</p>
                                <p className='text-[14px] text-textColor2'>Lorem Ipsum is simply dummy text</p>
                            </div>
                        </div>

                        <div className='mt-[43px]'>
                            <p className='text-[30px] '> <span className='text-mainColor font-semibold'>Lorem Ipsum </span> is simply dummy text of the printing.</p>
                            <p className='text-[16px] text-textColor2 mt-[56px] max-w-[476px]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Andriod & IOS.</p>
                        </div>
                    </div>

                    <img src={sixthImg} alt="" className='mt-[55px]' />
                </div>


                <div className='flex max-w-[1194px] mx-auto justify-between'>

                    <img src={seventhImg} alt="" className='mt-[159px]' />

                    <div className='mt-[240px]'>
                        <div className='flex items-center gap-x-[25px]'>
                            <img src={FifthImg} alt="" className='border border-mainColor rounded-full border-x-[10px] border-y-[10px]' />
                            <div>
                                <p className='text-[18px]'>Lorem Ipsum is simply dummy text</p>
                                <p className='text-[14px] text-textColor2'>Lorem Ipsum is simply dummy text</p>
                            </div>
                        </div>

                        <div className='mt-[43px]'>
                            <p className='text-[30px] max-w-[500px]'><span className='text-mainColor font-semibold'>Lorem Ipsum </span> is simply dummy text of the printing.</p>
                            <p className='text-[16px] text-textColor2 mt-[56px] max-w-[476px]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Andriod & IOS.</p>
                        </div>
                    </div>

                </div>

                <div className='flex max-w-[1194px] mx-auto justify-between'>
                    <div className='max-w-[516px]'>
                        <div className='flex mt-[189px] items-center gap-x-[25px]'>
                            <img src={FifthImg} alt="" className='border border-img1Color rounded-full border-x-[10px] border-y-[10px]' />
                            <div>
                                <p className='text-[18px]'>Lorem Ipsum is simply dummy text</p>
                                <p className='text-[14px] text-textColor2'>Lorem Ipsum is simply dummy text</p>
                            </div>
                        </div>

                        <div className='mt-[43px]'>
                            <p className='text-[30px] '> <span className='text-mainColor font-semibold'>Lorem Ipsum </span> is simply dummy text of the printing.</p>
                            <p className='text-[16px] text-textColor2 mt-[56px] max-w-[476px]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Andriod & IOS.</p>
                        </div>
                    </div>

                    <img src={ManImg} alt="" className='h-[470px] w-[800px] mt-[86px]' />
                </div>

                <div className='flex max-w-[1194px] mx-auto gap-x-[50px] mt-[234px] text-center'>
                    <div className='border h-[420px] w-[572px] bg-img2Color rounded-2xl'>
                        <p className='max-w-[365px] mx-auto mt-[64px] text-[25px] font-semibold'>Lorem Ipsum is simply dummy text.</p>
                        <p className='max-w-[476px] mx-auto mt-[36px] text-[16px] text-img3Color'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Andriod & IOS.</p>

                        <button className='border  bg-mainColor text-white rounded-[10px] py-1.5 px-4 mt-[36px] '>View More</button>
                    </div>

                    <div className='border h-[420px] w-[572px] bg-mainColor rounded-2xl text-center text-white'>
                        <p className='max-w-[365px] mx-auto mt-[64px] text-[25px] font-semibold'>Lorem Ipsum is simply dummy text.</p>
                        <p className='max-w-[476px] mx-auto mt-[36px] text-[16px]'>KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Andriod & IOS.</p>

                        <button className='border bg-white text-mainColor rounded-[10px] py-1.5 px-4 mt-[36px] '>View More</button>

                        {/* /* <img src={TwoImg} alt="" className='mb-[70px]' /> */}
                    </div>
                </div>

                <div className='text-center mt-[184px] text-[24px]'>
                    <p>You will be in good Company</p>
                </div>

                <div className='max-w-[1040px] mx-auto'>
                    <img src={OneImg} alt="" />
                </div>

            </div>

            <CTA />
            

        </section>


    )
}

export default Home


