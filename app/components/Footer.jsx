import React from 'react'

import { assets } from '@/assets/assets'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className="text-center">
                <a href="#top" className='text-[1.7rem] font-bold' >
                    {/* <Image alt="" src={assets.logo} className="w-28 cursor-pointer mr-14" /> */}
                    Andrew <span className='text-blue-500'>.</span>
                </a>

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='' className='w-5' />
                    andrey.khlebov@bk.ru
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400
        mx-[10%] mt-12 py-6'>
                <p className='font-noto text-lg'>@ 2026 Andrew. Все права защищены</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="#">GitHub</a></li>
                    <li><a target='_blank' href="#">VK</a></li>
                    <li><a target='_blank' href="#">Telegram</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer