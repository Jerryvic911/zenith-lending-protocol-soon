import React from 'react';
import Navbar from "../components/Navbar";
import Button from '@/components/Button';
import Image from 'next/image';
import Logo from "../image/logo.png";
import Card from '@/Features/Cards';

function Body() {
    return (
        <div className="px-4 md:px-16">
            <div>
                <Navbar />
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-10 mb-11'>
                <div className='w-full md:w-[517px] relative'>
                    <h1 className='text-[48px] md:text-[96px] font-bold'>Zennith</h1>
                    <p className='w-full md:w-[450px] leading-5 text-[16px] font-normal'>
                        The safest and most secure lending protocol designed for you. Dive into a world of Tokenization with no limitations.
                    </p>
                    <div className='mt-5'>
                        <Button />
                    </div>
                </div>

                <div className='w-full md:w-auto hidden md:inline-block'>
                    <Image
                        src={Logo}
                        height={400}
                        width={400}
                        alt="Zennith"
                        className='object-cover w-[300px] h-auto' />
                </div>
            </div>

            <div>
                <ul className='md:flex grid grid-cols-2 md:flex-row md:ml-0 ml-16 items-center justify-center gap-10 capitalize'>
                    <li>
                        <h2 className="text-purple-500 text-2xl md:text-3xl">1 Million +</h2>
                        <p className="text-sm md:text-base">Transaction Processed</p>
                    </li>
                    <li>
                        <h2 className="text-blue-500 text-2xl md:text-3xl">2 Sec</h2>
                        <p className="text-sm md:text-base">Transaction Time</p>
                    </li>
                    <li>
                        <h2 className="text-purple-500 text-2xl md:text-3xl">10,000+</h2>
                        <p className="text-sm md:text-base">connected wallets</p>
                    </li>
                    <li>
                        <h2 className="text-blue-500 text-2xl md:text-3xl">99.9%</h2>
                        <p className="text-sm md:text-base">Asset Security</p>
                    </li>
                </ul>
            </div>

            <div>
                <Card />
            </div>
        </div>
    )
}

export default Body;
