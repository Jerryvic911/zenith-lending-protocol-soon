import React from 'react'
import Image from 'next/image';
import Coin from "../image/Coin.png";

function Liquidity() {
  return (
    <div>
      <div>
        <div className=' gap-8'>
          <div className='md:flex gap-20  flex flex-col md:flex-row md:justify-start'>
            <Image
              src={Coin}
              height={300} // Adjust height for better mobile responsiveness
              width={300} // Adjust width for better mobile responsiveness
              alt="Zennith"
              className='object-contain relative top-10 md:pl-5 w-full md:max-w-[340px] h-auto mt-5 md:relative md:top-14 md:left-16'
            />

            <div className=' md:mt-36 md:w-[700px] md:ml-5 '>
              <h1 className='pb-3 font-[400] text-[22px] leading-[24px]'>Liquidity</h1>
             <div className='flex flex-row gap-6'>
             <div className='flex flex-col gap-4 pb-5 w-[400px] md:w-full'>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac,
                  vestibulum eu nisl.
                </p>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac,
                  vestibulum eu nisl.
                </p>
              </div>
              <div className='border-2 md:relative md:left-5 border-blue-800 w-[4px] h-[30rem] md:h-[16rem] mb-5  md:mt-0'></div>

             </div>

            </div>
          </div>
          <div className='flex flex-row   w-full'>



          </div>


        </div>

      </div>
    </div>
  )
}

export default Liquidity
