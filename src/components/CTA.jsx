import React from 'react'

function CTA() {
    return (
        <div className='h-[570px] bg-mainColor/10' >
            <div className='max-w-[561px] mx-auto text-center text-[30px] font-semibold pt-[148px]'>
                <p>Lorem Ipsum is simply dummy text of the printing</p>
            </div>

            <div className='flex gap-x-[14px] justify-center mt-[80px]'>
                <div>
                    <input type="text" name="" id=""
                        class="bg-white pl-10 px-52 py-3 rounded-[10px] text-[16px] placeholder:text-[16px] placeholder:text-text2Color"
                        placeholder="Enter your email"></input>
                </div>

                <div>
                    <button className='text-white bg-black py-3 px-8 rounded-[10px]'>SUBSCRIBE</button>
                </div>
            </div>

        </div>

    )
}

export default CTA