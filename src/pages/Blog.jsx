import React from 'react'
// import SearchImg from '../assets/search.png'
import MainImg from '../assets/m1.png'
import Main1Img from '../assets/m2.png'
import Main2Img from '../assets/m3.png'
import Main3Img from '../assets/m4.png'
import MiniImg from '../assets/mini.png'
import Mini1Img from '../assets/mini1.png'
import Mini2Img from '../assets/mini2.png'
import Mini3Img from '../assets/mini3.png'

import CTA from '../components/CTA'

function Blog() {
    return (
        <section>
            <div className='bg-semiColor h-[2500px]'>
                <div className='pt-[72px]'>
                    <p className='text-[42px] font-bold max-w-[318px] mx-auto text-center'>Latest news <span className='text-mainColor'>Updates</span></p>
                    <p className='max-w-[432px] mx-auto text-center text-[20px] mt-[41px]'>Lorem Ipsum is simply dummy text of the printing.</p>

                    <div className='max-w-[400px] mx-auto justify-center'>
                        <input type="text" name="" id=""
                            class="bg-img2Color mt-[52px] pl-10 px-28 py-3 rounded-[10px] text-[16px] placeholder:text-[16px] placeholder:text-text2Color"
                            placeholder="Search"></input>
                    </div>

                    <div className='flex text-[14px] max-w-[946px] mx-auto justify-between mt-[66px]'>
                        <p className='border bg-mainColor/10 rounded-[30px] py-1.5 px-5 text-mainColor'>Lorem Ipsum</p>
                        <p className='border bg-mainColor/10 rounded-[30px] py-1.5 px-5 text-mainColor'>Lorem Ipsum</p>
                        <p className='border bg-mainColor/10 rounded-[30px] py-1.5 px-5 text-mainColor'>Lorem Ipsum</p>
                        <p className='border bg-mainColor/10 rounded-[30px] py-1.5 px-5 text-mainColor'>Lorem Ipsum</p>
                        <p className='border bg-mainColor rounded-[30px] py-1.5 px-5 text-white'>Lorem Ipsum</p>
                    </div>

                </div>

                <div className='flex max-w-[1130px] mx-auto justify-between mt-[109px]'>
                    <div>
                        <img src={MainImg} alt="" />
                    </div>

                    <div className='max-w-[525px] mx-auto'>
                        <p className='text-[27px] font-semibold mt-[20px]'>Lorem Ipsum is simply dummy text of the printing.</p>
                        <p className='text-[16px] mt-[33px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>

                        <div className='flex items-center gap-x-[21px] mt-[17px]'>
                            <div>
                                <img src={MiniImg} alt="" />
                            </div>

                            <div>
                                <p>Name here</p>
                                <p>20.10.2023</p>
                            </div>

                            <div className='text-mainColor pl-[220px] mt-[20px]'>
                                <p>Read More</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex mt-[136px] max-w-[1168px] mx-auto justify-between'>
                    <div>
                        <img src={Main1Img} alt="" />
                        <div className='max-w-[334px] mx-auto'>
                            <p className='mt-[40px] text-[23px]'>Lorem Ipsum is simply dummy text of the printing.</p>
                            <p className='mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>

                        <div className='flex items-center mt-[19px] gap-x-[21px]'>
                            <img src={Mini1Img} alt="" />

                            <div>
                                <p className='text-[18px]'>Name here</p>
                                <p className='text-[14px]'>20.10.2023</p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <img src={Main2Img} alt="" />
                        <div className='max-w-[333px] mx-auto'>
                            <p className='mt-[40px] text-[23px]'>Lorem Ipsum is simply dummy text of the printing.</p>
                            <p className='mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>

                        <div className='flex items-center mt-[19px] gap-x-[21px]'>
                            <img src={Mini2Img} alt="" />

                            <div>
                                <p className='text-[18px]'>Name here</p>
                                <p className='text-[14px]'>20.10.2023</p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <img src={Main3Img} alt="" />
                        <div className='max-w-[333px] mx-auto'>
                            <p className='mt-[40px] text-[23px]'>Lorem Ipsum is simply dummy text of the printing.</p>
                            <p className='mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>

                        <div className='flex items-center mt-[19px] gap-x-[21px]'>
                            <img src={Mini3Img} alt="" />

                            <div>
                                <p className='text-[18px]'>Name here</p>
                                <p className='text-[14px]'>20.10.2023</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex mt-[136px] max-w-[1168px] mx-auto justify-between'>
                    <div>
                        <img src={Main1Img} alt="" />
                        <div className='max-w-[334px] mx-auto'>
                            <p className='mt-[40px] text-[23px]'>Lorem Ipsum is simply dummy text of the printing.</p>
                            <p className='mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>

                        <div className='flex items-center mt-[19px] gap-x-[21px]'>
                            <img src={Mini1Img} alt="" />

                            <div>
                                <p className='text-[18px]'>Name here</p>
                                <p className='text-[14px]'>20.10.2023</p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <img src={Main2Img} alt="" />
                        <div className='max-w-[333px] mx-auto'>
                            <p className='mt-[40px] text-[23px]'>Lorem Ipsum is simply dummy text of the printing.</p>
                            <p className='mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>

                        <div className='flex items-center mt-[19px] gap-x-[21px]'>
                            <img src={Mini2Img} alt="" />

                            <div>
                                <p className='text-[18px]'>Name here</p>
                                <p className='text-[14px]'>20.10.2023</p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <img src={Main3Img} alt="" />
                        <div className='max-w-[333px] mx-auto'>
                            <p className='mt-[40px] text-[23px]'>Lorem Ipsum is simply dummy text of the printing.</p>
                            <p className='mt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        </div>

                        <div className='flex items-center mt-[19px] gap-x-[21px]'>
                            <img src={Mini3Img} alt="" />

                            <div className=''>
                                <p className='text-[18px]'>Name here</p>
                                <p className='text-[14px]'>20.10.2023</p>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>

            <CTA />
        </section>
    )
}

export default Blog