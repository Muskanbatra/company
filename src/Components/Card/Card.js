import React from 'react'

export const Card = () => {
    return (
        <>
            <div className='sm:m-2 m-2 sm:p-2 pt-2 bg-white md:flex flex-row justify-between block'>
                <div className='bg-red-50 p-4 pr-24 m-3'>
                    <p className="font-semibold  tracking-wider" >FULL NAME</p>
                    <p className='text-red-300 tracking-wider' >KAVITA GOHIL</p>
                    <p className="font-semibold  tracking-wider pt-1" >EMAIL ADDRESS</p>
                    <p className='text-red-300 tracking-wider' >aabid@unicoglobal.in</p>
                    <p className="font-semibold tracking-wider pt-1" >PHONE NUMBER</p>
                    <p className='text-red-300 tracking-wider' >+1 987 654 3210</p>
                    <p className="font-semibold  tracking-wider pt-1" >ADDRESS</p>
                    <p className='text-red-300 tracking-wider' >123st, ABC Avenue, Calgary, T1W - T4B, Canado</p>
                </div>
                <div >
                    <div className='float-right'>
                        <button className='border border-gray-400 font-extralight  py-1 px-2 text-1xl m-2' >PAID IN FULL</button>
                    </div>
                    <div className='pt-48 pr-3 '>
                        <p className='float-right'>
                            <span className='text-red-300 tracking-wider '>INVOICE N0: </span>
                            <span className="font-semibold  tracking-wider"> 223400188</span>
                        </p>
                        <p >
                            <span className='text-red-300 tracking-wider'>INVOICE UAIE: </span>
                            <span className="font-semibold  tracking-wider">20-01-2023</span>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}
