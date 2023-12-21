import React from 'react'
import './Table.css'
export const Table = () => {

    return (
        <>
            <div class=" sm:m-2 m-0 mt-6 overflow-auto">
                <table class="w-full bg-white border border-gray-300">
                    <thead className='bg-red-300  '>
                        <tr className='text-white'>
                            <td class="py-3 px-4">#</td>
                            <td class="py-3 px-4 ">DESCRIPTION</td>
                            <td class="py-3 px-4">QTY.</td>
                            <td class="py-3 px-4">PRICE</td>
                            <td class="py-3 px-4">TOTAL</td>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className=' align-top'>
                            <td class="py-3 px-4 border-b">01</td>
                            <td class="py-3 px-4 border-b font-semibold  tracking-wider ">BRAND NEW - FULL BODY
                                <div> <td className='font-light  tracking-wider'>1 Hour 30 Minutes</td></div>
                                <div><td className='font-light  tracking-wider'>SUZY TASSE</td></div>
                                <div><td className='font-light  tracking-wider'>17th June 2023, 1:00 PM - 2:30 PM MDT</td></div></td>
                            <td class="py-3 px-4 border-b font-semibold  tracking-wider">1</td>
                            <td class="py-3 px-4 border-b font-semibold  tracking-wider">CAD$550</td>
                            <td class="py-3 px-4 border-b font-semibold  tracking-wider">CAD$550</td>
                        </tr>
                        <tr className=' align-top'>
                            <td class="py-3 px-4 border-b">02</td>
                            <td class="py-3 px-4 border-b font-semibold  tracking-wider ">FACE FIRST - FULL NECK
                                <div> <td className='font-light  tracking-wider'>30 Minutes</td></div>
                                <div><td className='font-light  tracking-wider'>HANNA TASSE</td></div>
                                <div><td className='font-light  tracking-wider'>17th June 2023, 2:30 PM - 3:00 PM MDT</td></div></td>
                            <td class="py-3 px-4 border-b font-semibold  tracking-wider">1</td>
                            <td class="py-3 px-4 border-b font-semibold  tracking-wider">CAD$125</td>
                            <td class="py-3 px-4 border-b font-semibold  tracking-wider">CAD$125</td>
                        </tr>
                        <tr className=' align-top'>
                            <td class="py-3 px-4 border-b">03</td>
                            <td class="py-3 px-4 border-b font-semibold  tracking-wider ">BRAND NEW - FULL BODY
                                <div> <td className='font-light  tracking-wider'>30 Minutes</td></div>
                                <div><td className='font-light  tracking-wider'>AABID MUKADAM</td></div>
                                <div><td className='font-light  tracking-wider'>17th June 2023, 3:30 PM - 4:00 PM MDT</td></div></td>
                            <td class="py-3 px-4 border-b font-semibold  tracking-wider">1</td>
                            <td class="py-3 px-4 border-b font-semibold  tracking-wider">CAD$550</td>
                            <td class="py-3 px-4 border-b font-semibold  tracking-wider">CAD$550</td>
                        </tr>
                    </tbody>
                    <tbody className="bg-red-50 ">
                        <tr>
                            <td></td>
                            <td className='py-3 px-4 font-semibold '>
                        <div ><td>SUB-TOTAL</td></div>
                        <div ><td> DISCOUNT-10%</td></div> 
                        <div ><td>GROSS-TOTAL</td></div> 
                        <div ><td>TAX-10%</td></div> 
                        <td></td>
                        </td>
                            <td class=" px-4 py-2"></td>
                            <td class=" px-4 py-2"></td>
                            <td className='text-red-300 font-semibold '>
                        <div ><td>CAD$1,550.00</td></div>
                        <div ><td>CAD$155.00</td></div> 
                        <div ><td>CAD$1,395.00</td></div> 
                        <div ><td>CAD$139.50</td></div> 
                        <td></td>
                        </td>
                        </tr>
                    </tbody>
                    <tfoot className='bg-red-300 '>
                        <tr className='text-white  '>
                            <td class="py-3 px-4"></td>
                            <td class="py-3 px-4 ">NET - TOTAL</td>
                            <td class="py-3 px-4"></td>
                            <td class="py-3 px-4"></td>
                            <td class="py-3 px-4">CAD$1,534.50</td>
                        </tr>
                    </tfoot>
                </table>
            </div>



        </>
    )
}
