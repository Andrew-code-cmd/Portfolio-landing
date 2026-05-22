'use client'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { infoList } from '@/assets/assets'
import { toolsData } from '@/assets/assets'
import { motion } from 'motion/react'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='about' className='w-full px-[3%] lg:px-[7%] xl:px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }} className='text-center mb-2 text-xl font-noto'>В двух словах</motion.h4>
            <motion.h2
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-6xl font-noto'>
                Обо мне</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10'>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className='ml-[5%] xl:ml-[11%] lg:ml-[5%] w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.var3} alt='user' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'>
                    <p className='mb-10 max-w-2xl font-noto text-[1.25rem] text-left max-lg:text-center'>
                        Меня зовут Андрей, я веб-разработчик. Я помогаю бизнесу расти, разрабатывая масштабируемые цифровые решения
                        под конкретные задачи. Специализируюсь на full‑stack проектах: от проектирования архитектуры до деплоя и поддержки
                    </p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.01}}
                                key={index} className='border-[0.5px] border-gray-400
                            rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 box-shadow
                            '>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className='my-6 text-gray-700 font-Ovo'>Какие инструменты использую: </motion.h4>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1.5 }}
                        className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li
                            whileHover={{scale: 1.1}}
                            key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square
                            border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>

                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About