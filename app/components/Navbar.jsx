'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { assets } from '@/assets/assets'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        if(showMobileMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return ()=>{
            document.body.style.overflow = 'auto'
        };
    }, [showMobileMenu])

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(scrollY > 50){
                setIsScroll(true);
            }else{
                setIsScroll(false);
            }
        })
    })

    return (
        <>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex
                items-center justify-between x-50 z-999 ${isScroll ? "bg-opacity-50 shadow-sm" : ""}`}>
                <a href="#top" className='text-[1.7rem] font-bold' >
                    {/* <Image alt="" src={assets.logo} className="w-28 cursor-pointer mr-14" /> */}
                    Andrew <span className='text-blue-500'>.</span>
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all
            ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
                    <li><a className="font-Ovo" href="#top">Главная</a></li>
                    <li><a className="font-Ovo" href="#about">Обо мне</a></li>
                    <li><a className="font-Ovo" href="#services">Услуги</a></li>
                    <li><a className="font-Ovo" href="#work">Кейсы</a></li>
                    <li><a className="font-Ovo" href="#contact">Связаться</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button>
                        <Image src={assets.moon_icon} alt='' className="w-6" />
                    </button>

                    <a href="#contact" className="font-Ovo hidden lg:flex border border-gray-500 rounded-full px-10 py-2.5 items-center gap-3">
                        Связаться <Image alt="" src={assets.arrow_icon} className="w-3" /></a>

                    <button className='block md:hidden ml-3'>
                        <Image onClick={() => setShowMobileMenu(true)} src={assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* mobile menu */}
                <ul className={`${showMobileMenu ? 'right-0' : '-right-64'} flex md:hidden flex-col gap-4 py-20 px-10 fixed
                top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-500`}>

                    <div className='absolute right-6 top-6'>
                        <Image onClick={() => setShowMobileMenu(false)} src={assets.close_black} alt='' className='w-5' />
                    </div>

                    <li><a onClick={() => setShowMobileMenu(false)} className="font-Ovo" href="#top">Главная</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} className="font-Ovo" href="#about">Обо мне</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} className="font-Ovo" href="#services">Услуги</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} className="font-Ovo" href="#work">Кейсы</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} className="font-Ovo" href="#contact">Связаться</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar