'use client'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

import { motion } from 'motion/react'

const Contact = () => {
    return (
        <div
            id="contact" className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className='text-center mb-2 text-xl font-noto'>Оставайтесь на связи</motion.h4>
            <motion.h2
                initial={{ y: -25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className='text-center text-5xl font-noto'>
                Обсудим ваш проект</motion.h2>

            <motion.p
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Опишите свою идею или проблему и я свяжусь с вами в ближайшее время
            </motion.p>

            <form className='max-w-4xl mx-auto'>
                <div className='grid sm:grid-cols-2 gap-6 mt-10 mb-8'>
                    <motion.input
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1.2 }}
                        type="text" placeholder='Введите ваше имя' required
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                    <motion.input
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1.2 }}
                        type="email" placeholder='И вашу почту' required
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                </div>
                <motion.textarea
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.4 }}
                    rows='6' placeholder='Опишите свою идею' required
                    className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></motion.textarea>

                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.7 }}
                    type='submit'
                    className='flex mx-auto px-8 py-3 bg-black/80 rounded-full text-white cursor-pointer
                items-center justify-between gap-2 hover:bg-black duration-500'>Связаться </motion.button>

                {/* <p className='mt-4'>sending...</p> */}
            </form>
        </div>
    )
}

export default Contact