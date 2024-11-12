import React from 'react'

function Footer() {
  return (
    <div className='flex flex-row justify-between items-center w-full  p-4'>
       <div>
          <ul className='md:flex md:flex-row flex-col gap-10 items-start'>
            <li>Terms</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Privacy</li>
            <li>FAQs</li>
          </ul>
       </div>

       <div className=' justify-between items-center'>
        <ul className='md:flex md:flex-row flex-col gap-10 items-start'>
          <li>Twitter</li>
          <li>Telegram</li>
          <li>Github</li>
          <li>Discord</li>
        </ul>
       </div>
    </div>
  )
}

export default Footer
