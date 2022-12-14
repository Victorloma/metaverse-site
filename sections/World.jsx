'use client'

import { motion } from 'framer-motion'

import styles from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'
import { TitleText, TypingText } from '../components'

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| People on the world' textStyles='text-center' />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles='text-center'
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full'
      >
        <img src='/map.png' alt='map' className='w-full h-full object-cover' />

        <div className='absolute bottom-20 right-20 w-[70px] h-[70px]p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-01.png' alt='people' className='w-full h-full' />
        </div>
        <div className='absolute top-10 left-20 w-[70px] h-[70px]p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-02.png' alt='people' className='w-full h-full' />
        </div>
        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px]p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-03.png' alt='people' className='w-full h-full' />
        </div>
        <div className='absolute top-[15%] right-[20%] w-[150px] h-[75px]p-[6px] rounded-lg border-8 border-transparent bg-gradient-to-br from-[#424f81] to-[#3f3b60]'>
          <img
            src='world-01.png'
            alt='people'
            className='rounded-lg w-full h-full overflow-hidden'
          />
          <div className='absolute bottom-[45%] left-[10%]'>
            <div className='relative flex'>
              <img src='face-01.png' alt='avatar' className='h-[14px] z-10' />
              <img
                src='face-02.png'
                alt='avatar'
                className='relative h-[14px] ml-[-6px] z-9'
              />
              <img
                src='face-03.png'
                alt='avatar'
                className='h-[14px] ml-[-6px] z-8'
              />
              <p className='text-white text-[10px] ml-[6px]'>+264 has joined</p>
            </div>
          </div>
          <div className='absolute bottom-[15%] left-[10%]'>
            <p className='text-[14px] font-bold text-white '>Hawkins Lab</p>
          </div>
        </div>
        <div className='absolute bottom-[20%] left-[20%] w-[160px] h-[80px]p-[6px] rounded-lg border-8 border-transparent bg-gradient-to-br from-[#424f81] to-[#3f3b60]'>
          <img
            src='world-02.png'
            alt='people'
            className='rounded-lg w-full h-full overflow-hidden'
          />
          <div className='absolute bottom-[45%] left-[10%]'>
            <div className='relative flex'>
              <img src='face-01.png' alt='avatar' className='h-[14px] z-10' />
              <img
                src='face-02.png'
                alt='avatar'
                className='relative h-[14px] ml-[-6px] z-9'
              />
              <img
                src='face-03.png'
                alt='avatar'
                className='h-[14px] ml-[-6px] z-8'
              />
              <p className='text-white text-[10px] ml-[6px]'>+264 has joined</p>
            </div>
          </div>
          <div className='absolute bottom-[15%] left-[10%]'>
            <p className='text-[14px] font-bold text-white '>The Upside Down</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default World
