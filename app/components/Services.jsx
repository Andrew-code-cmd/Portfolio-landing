'use client'
import { serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'motion/react'

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className='text-center mb-2 text-xl font-noto'>Вкратце про</motion.h4>
            <motion.h2
                initial={{ y: -25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className='text-center text-5xl font-noto'>
                Мои Услуги</motion.h2>

            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className='text-center max-w-2xl  text-[1.25rem] mx-auto mt-5 mb-12 font-noto'>
                Оптимизирую цифровые процессы вашего бизнеса. Разработка с учётом KPI: скорость, надёжность, удобство для пользователей
            </motion.p>

            <div className="grid xl:grid-cols-4 sm:grid-cols-2  gap-6 my-10">
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                        key={index} className='border border-gray-400 rounded-lg px-8 py-12 
                    box-shadow duration-500 cursor-pointer hover:bg-lightHover hover:-translate-y-1'>
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Подробнее <Image alt='' src={assets.right_arrow} className='w-4' />
                        </a>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Services