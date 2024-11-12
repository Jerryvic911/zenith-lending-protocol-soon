import React from 'react';
import Navbar from "../components/Navbar";
import Button from '@/components/Button';
import Image from 'next/image';
import Logo from "../image/logo.png";
import Card from '@/Features/Cards';
import Process from '@/Features/Process';
import Liquidity from '@/Features/Liquidity';
import Footer from '@/components/Footer';
import Sidebar from '../components/Drawer';


function Body() {
    return (
        <div className="px-4 md:px-16 ">
            <div>
                <Navbar />
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-10 mb-11'>
                <div className='w-full md:w-[517px] relative'>
                    <div className='flex flex-row justify-between'>
                    <h1 className='text-[48px] md:text-[96px] font-bold'>Zennith</h1>
                   <div className='inline-block pt-5 md:hidden'>
                   <Sidebar/>
                   </div>
                    </div>
                   
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

            <div >
                <ul className='md:flex grid grid-cols-2 md:flex-row md:ml-0 ml-11 items-center justify-center gap-10 capitalize'>
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

            <div className='pt-16 mb-16'> 
            <h1 className='ml-[4rem] relative top-10 font-[500] text-[20px] md:text-[22px]'>Why Choose Zennith?</h1>
                <Card />
            </div>

            <div className='mb-10'>
                <Process/>
            </div>

            <div>
                <Liquidity/>
            </div>

            <div>
                <h1 className='text-[88px] md:text-[250px] text-[#191c3e] font-normal text-center mb-10'>Zennith</h1>
            </div>

            <div>
                <div className=' border-[1px] border-[#1A1E3E]'></div>
                <Footer/>
            </div>
        </div>
    )
}

export default Body;
