import React from 'react';
import Image from 'next/image';
import Ladder from "../image/Ladder.png";
import Button from '@/components/Button';

function Process() {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex flex-row items-start'>
                    <div className='border-2 border-blue-800 w-[4px] h-[27rem] md:h-[18rem] mb-5 mt-3 md:mt-0'></div>
                    <div className='mt-3'>
                        <h1 className='pb-3 ml-4 font-[400] text-[22px] leading-[24px]'>How it works</h1>
                        <div className='flex flex-row gap-4 pb-5'>
                            <h2 className='w-[45px] h-[45px] bg-[#dfd6d8] text-[#BF082E] font-[400] text-[20px] rounded-full pl-4 pt-2'>1.</h2>
                            <p className='flex-1'>Connect your wallet: aptent taciti sociosqu adper inceptos himenaeos. Curabitur
                            tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                        </div>
                        <div className='flex flex-row gap-4 pb-5'>
                            <h2 className='w-[45px] h-[45px] bg-[#dfd6d8] text-[#BF082E] font-[400] text-[20px] rounded-full pl-4 pt-2'>2.</h2>
                            <p className='flex-1'>Lend/Borrow any Token: aptent taciti sociosqu ad litora torquent per conubia
                            eos. commodo efficitur neque. Ut diam quam, semper iaculis condim.</p>
                        </div>
                        <div className='flex flex-row gap-4'>
                            <h2 className='w-[45px] h-[45px] bg-[#dfd6d8] text-[#BF082E] font-[400] text-[20px] rounded-full pl-4 pt-2'>3.</h2>
                            <p className='flex-1'>Make proposal: aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. a at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center md:justify-end'>
                    <Image
                        src={Ladder}
                        height={400} // Adjust height for better mobile responsiveness
                        width={400} // Adjust width for better mobile responsiveness
                        alt="Zennith"
                        className='object-cover w-full max-w-[400px] h-auto mt-3 md:mt-10'
                    />
                </div>
            </div>
            <Button />
        </div>
    )
}

export default Process;
