import React, { useState, useRef, useEffect } from 'react'


function State() {
    const [light, setLight] = useState(true)
    const btnRef = useRef(null)

    function toggleLight() {
        setLight(!light)
        btnRef.current.focus()

    }

    useEffect(() => {
      console.log('The page re-rendered')
    }, [])
    







    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex gap-5 w-full justify-center p-8'>
                <p className='border border-green-500 p-4 rounded-lg'>{light ? 'ON' : 'OFF'}</p>
                <button className='text-white bg-mainColor px-9 rounded-lg shadow-lg' onClick={toggleLight}>Toggle</button>
                <input ref={btnRef}
                    type="text" name="ann" id="ann_id" className='bg-red-200' />
            </div>

            

        </div>

    )
}

export default State