import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const animatetext = [
  {
    id: '1',
    line1: 'Customized solutions\n ',
    line2: 'to meet the needs of\n ',
    line3: 'the changing market',
    linkname: '\nRevenue Cycle Management',
  },
  {
    id: '2',
    line1: 'Scalable extended\n ',
    line2: 'business office\n ',
    line3: 'services',
    linkname: '\nStaff Augmentation',
  },
  {
    id: '3',
    line1: 'Innovative and\n ',
    line2: 'intelligent technology\n ',
    line3: 'solutions and services',
    linkname: '\nProduct Management',
  },
]

// const container = {
//   initial: {
//     // opacity: 0,
//   },
//   animate: {
//     // opacity: 1,
//     transition: {
//       // duration: 2,
//       // type: 'spring',
//       staggerChildren: 0.3,
//       staggerDirection: -1,
//       when: 'beforeChildren',
//       // ease: 'easeInOut',
//       // repeatType: 'reverse',
//       // repeat: Infinity,
//     },
//   },
// }

// const textvariant = {
//   initial: {
//     opacity: 0,
//     y: 40,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 2,

//       ease: 'easeInOut',
//       repeatType: 'reverse',
//       repeat: Infinity,
//     },
//   },
// }

const TextCarousel = () => {
  const line1 = useAnimation()
  const line2 = useAnimation()
  const line3 = useAnimation()
  const linkline = useAnimation()

  const [heading, setheading] = useState(0)

  const handelrightclick = () => {
    setheading(heading >= 2 ? 0 : heading + 1)
    line1.start({
      opacity: [0, 1],
      y: [40, 0],
      transition: {
        duration: 1,
      },
    })
    line2.start({
      opacity: [0, 1],
      y: [40, 0],
      transition: {
        duration: 1.5,
      },
    })
    line3.start({
      opacity: [0, 1],
      y: [40, 0],
      transition: {
        duration: 2,
      },
    })
    linkline.start({
      opacity: [0, 1],
      y: [40, 0],

      transition: {
        duration: 2.5,
      },
    })
  }

  const handelleftclick = () => {
    line1.start({
      opacity: [0, 1],
      y: [40, 0],
      transition: {
        duration: 2,
      },
    })
    setheading(heading <= 0 ? 2 : heading - 1)
  }
  const { inView, entry, ref } = useInView()
  const animationControl = useAnimation()

  useEffect(() => {
    if (inView) {
      animationControl.start({
        opacity: 1,

        transition: {
          delay: 0.5,
        },
      })
    } else {
      animationControl.start({
        opacity: 0,

        transition: {
          delay: 0.5,
        },
      })
    }
    console.log(`initializing interval`)
    const interval = setInterval(() => {
      handelrightclick()
    }, 8000)

    return () => {
      console.log(`clearing interval`)
      clearInterval(interval)
    }
  })

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={animationControl}
      ref={ref}
      className='flex items-center flex-col lg:pr-24 justify-center pr-10'
    >
      <motion.div className='text-custom md:text-5xl text-3xl '>
        <motion.div className='whitespace-pre-line  font-bold' animate={line1}>
          {animatetext[heading].line1}
        </motion.div>
        <motion.div className='whitespace-pre-line  font-bold ' animate={line2}>
          {animatetext[heading].line2}
        </motion.div>
        <motion.div className='whitespace-pre-line  font-bold ' animate={line3}>
          {animatetext[heading].line3}
        </motion.div>
        <motion.div
          // style={{
          //   borderBottom: 'solid 3px #019fb6',
          //   width: 'fit-content',
          // }}
          animate={linkline}
          className='whitespace-pre-line text-base font-bold  border-b-4 border-yellow-500 w-max  '
        >
          <Link href='/' passHref>
            <motion.span className=' '>
              {animatetext[heading].linkname}
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
      <div className='flex justify-end w-full '>
        <button className=' text-4xl' onClick={() => handelleftclick()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>
        <button className=' text-4xl' onClick={() => handelrightclick()}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div>
    </motion.div>
  )
}

export default TextCarousel
