import React from 'react'
import Navbar from "../components/Navbar";
import Button from '@/components/Button';
import Image from 'next/image';
import Logo from "../image/logo.png"

function Body() {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='flex items-center justify-center gap-10 ml-5 mb-11'>
                <div className='w-[517px] relative bottom-4'>
                    <h1 className=' text-[96px] font-size-48 font-bold '>Zennith</h1>
                    <p className='w-[450px] leading-[19px] text-[16px] font-[400]'>The safest and most secure lending protocol designed for you.
                        Dive into a world of Tokenization with no limitations.</p>
                    <div className='mt-5'>
                        <Button />
                    </div>
                </div>

                <div className='object-cover'>
                    <Image
                        src={Logo}
                        height={300}
                        width={300}
                        alt="Zennith"
                        className='object-cover' />
                </div>
            </div>

            <div>
                <ul className='flex items-center justify-center gap-10 capitalize'>
                    <li >
                        <h2 className="text-purple-500">1 Million +</h2>
                        <p>Transaction Processed</p>
                    </li>
                    <li >
                        <h2 className="text-blue-500">2 Sec</h2>
                        <p>Transaction Time</p>
                    </li>
                    <li className="text-purple-500">
                        <h2>10,000+</h2>
                        <p>connected wallets</p>
                    </li>
                    <li className="text-blue-500">
                        <h2>99.9%</h2>
                        <p>Asset Security</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Body
