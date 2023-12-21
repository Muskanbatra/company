import React from 'react'
import { Card } from '../Card/Card'
import { Table } from '../Table/Table'

export const Pink = () => {
    return (
        <>
            <div className="mt-6 bg-red-50 sm:ml-3 ml-1 sm:mr-3 mr-1 sm:p-7 p-2">
                <div className="sm:pl-5 text-3xl font-medium  text-red-300 pl-1"> MY GIRL SOUZ</div>
                <div className="flex flex-row justify-between items-center ">
                    <div className='mt-4 pt-3 sm:pl-5 pl-1'>
                        <p className=' font-semibold  text-lg'>4949 HUBALTA ROAD SE, CALGARY, AB T2B 1T5, CANADA</p>
                        <p className=' font-semibold text-lg'>403-994-0400</p>
                        <p className=' font-semibold text-lg'>INFO@MYGIRLSOUZ.COM</p>
                    </div>
                    <div className='pr-6 font-light hidden sm:block'>
                        <p>MY GIRL</p>
                    </div>
                </div>

                <div style={{ height: "1px", backgroundColor: "black", marginTop: "2rem" }}></div>
                <div className="pl-5 text-1xl font-medium  text-red-300 mt-4 "> BILL TO</div>
                <Card />
                <Table />
                <div className='mr-3 mt-4 font-semibold '>
                    <span className="  tracking-wider" >1. Advance deposit of </span>
                    <span className='text-green-500 tracking-wider'> CAD$100.00 PAID on 1st June 2023</span>
                </div>
                <div className='mr-3 font-semibold '>
                    <span className="  tracking-wider" >2. Pending payment of </span>
                    <span className='text-green-500 tracking-wider'> CAD$1435.00 PAID through Apply Pay with Reference No</span>
                </div>
            </div>
        </>
    )
}
