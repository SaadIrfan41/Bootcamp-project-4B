import { motion, useAnimation } from 'framer-motion'
import { Fragment, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const ServicesBox = () => {
  const { inView, entry, ref } = useInView()
  const animationControl = useAnimation()

  useEffect(() => {
    if (inView) {
      animationControl.start({
        opacity: 1,

        transition: {
          delay: 0.5,
          staggerChildren: 0.3,
          staggerDirection: -1,
          when: 'beforeChildren',
        },
      })
    } else {
      animationControl.start({
        opacity: 0,

        transition: {
          delay: 0.5,
          staggerChildren: 0.3,
          staggerDirection: -1,
          when: 'beforeChildren',
        },
      })
    }
  })

  const boxvariant = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,

        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      animate={animationControl}
      className='flex flex-wrap lg:flex-nowrap  '
    >
      <motion.div
        className='ml-1 '
        variants={boxvariant}
        initial='initial'
        animate='animate'
      >
        <motion.div className='rounded-3xl flex flex-col w-36 md:w-48 h-36 md:h-48   relative font-semibold shadow-2xl mb-10'>
          <span
            style={{ color: '#b1cfef' }}
            className='absolute right-5 top-5 text-3xl'
          >
            R
          </span>
          <span
            style={{ color: '#638db9' }}
            className='absolute bottom-6 left-5'
          >
            Revenue <br />
            Cycle Management
          </span>
        </motion.div>
        <motion.div className='rounded-3xl flex flex-col w-36 md:w-48 h-36 md:h-48   relative font-semibold shadow-2xl mb-10 '>
          <span
            style={{ color: '#b1cfef' }}
            className='absolute right-5 top-5 text-3xl'
          >
            S
          </span>
          <span
            style={{ color: '#638db9' }}
            className='absolute bottom-6 left-5'
          >
            Staff <br />
            Augmentation
          </span>
        </motion.div>
        <motion.div
          style={{ backgroundColor: '#245991' }}
          className='rounded-3xl flex flex-col w-36 md:w-48 h-36 md:h-48   relative font-semibold shadow-2xl mb-10'
        >
          <span
            style={{ color: 'rgba(0,0,0,.4)' }}
            className='absolute right-5 top-5 text-3xl'
          >
            P
          </span>
          <span style={{ color: 'white' }} className='absolute bottom-6 left-5'>
            Payment <br />
            Posting
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        className=''
        variants={boxvariant}
        initial='initial'
        animate='animate'
      >
        <div
          style={{ backgroundColor: '#003a78' }}
          className='rounded-3xl flex flex-col w-36 md:w-48 h-36 md:h-48   relative font-semibold shadow-2xl mb-10 mt-10 md:ml-10 md:mr-10
              ml-5 mr-5'
        >
          <span
            style={{ color: '#638db9' }}
            className='absolute right-5 top-5 text-3xl'
          >
            R
          </span>
          <span style={{ color: 'white' }} className='absolute bottom-6 left-5'>
            Reason Code <br /> Mapping
          </span>
        </div>
        <div
          style={{
            border: '3px solid #638db9',
            // backgroundColor: 'rgba(255, 255, 255, 0.4)',
          }}
          className='rounded-3xl flex flex-col w-36 md:w-48 h-36 md:h-48   relative font-semibold shadow-2xl mb-10 md:ml-10 md:mr-10 ml-5 mr-5 '
        >
          <span
            style={{ color: 'rgba(0,0,0,.3)' }}
            className='absolute right-5 top-5 text-3xl'
          >
            P
          </span>
          <span
            style={{ color: '#638db9' }}
            className='absolute bottom-6 left-5'
          >
            Product
            <br />
            Management
          </span>
        </div>
        <div
          style={{
            backgroundColor: '#fdb811',
            boxShadow: '0 14px 14px -3px rgba(253,184,17,.42)',
          }}
          className='rounded-3xl flex flex-col w-36 md:w-48 h-36 md:h-48   relative font-semibold shadow-2xl mb-10 md:ml-10 md:mr-10 ml-5 mr-5'
        >
          <span
            style={{ color: 'rgba(0,0,0,.4)' }}
            className='absolute right-5 top-5 text-3xl'
          >
            V
          </span>
          <span style={{ color: 'white' }} className='absolute bottom-6 left-5'>
            Virtual
            <br />
            Assistant
          </span>
        </div>
      </motion.div>
      <motion.div
        className=''
        variants={boxvariant}
        initial='initial'
        animate='animate'
      >
        <div className='rounded-3xl flex flex-col w-36 md:w-48 h-36 md:h-48   relative font-semibold shadow-2xl mb-10 lg:mt-36 ml-2'>
          <span
            style={{ color: '#b1cfef' }}
            className='absolute right-5 top-5 text-3xl'
          >
            C
          </span>
          <span
            style={{ color: '#638db9' }}
            className='absolute bottom-6 left-5'
          >
            Correspondence
            <br />
            Management
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ServicesBox
