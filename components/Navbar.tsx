import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import { useInView } from 'react-intersection-observer'

const Navbar = () => {
  const { inView, entry, ref } = useInView({ threshold: 0.1 })
  const animationControl = useAnimation()
  // useEffect(() => {
  //   if (!inView) {
  //     animationControl.start({
  //       position: 'fixed',
  //       boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',

  //       opacity: [0, 1],

  //       transition: {
  //         delay: 0.5,
  //       },
  //     })
  //   }
  // })
  // if (!inView) {
  //   animationControl.start({
  //     position: 'fixed',
  //     boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',

  //     opacity: [0, 1],

  //     transition: {
  //       delay: 0.5,
  //     },
  //   })
  // }
  const [isopen, setisopen] = useState(false)

  const top = {
    animate: {
      rotate: isopen ? 45 : 0,
      y: isopen ? 30 : 0,

      transition: {
        duration: 0.2,
      },
    },
  }

  const center = {
    animate: {
      x: isopen ? -100 : 0,
      opacity: isopen ? [1, 0.5, 0] : [0, 0.5, 1],
      transition: {
        duration: 0.2,
      },
    },
  }
  const bottom = {
    animate: {
      rotate: isopen ? -45 : 0,
      y: isopen ? -30 : 0,
      transition: {
        duration: 0.2,
      },
    },
  }

  const burgermenu = {
    // initial: {
    //   width: isopen ? 100 : 100,
    // },
    animate: {
      width: isopen ? 288 : 100,

      transition: {
        staggerChildren: 0.3,
        // staggerDirection: -1,
        when: 'beforeChildren',
        duration: 1,
      },
    },
  }
  const listvariant = {
    initial: {
      x: 10,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  }

  const router = useRouter()
  return (
    <motion.div className='flex' animate={animationControl} ref={ref}>
      <div className='flex items-center w-screen lg:pt-10 lg:pb-10 lg:pr-24 lg:pl-24 md:pt-10 md:pr-10 md:pl-10 md:pb-10 sm:pt-5 sm:pb-5 sm:pr-5 sm:pl-5 transition-all'>
        {/* LOGO AND COMPANY NAME */}
        <div className='flex items-center  w-full justify-start'>
          <div className=' flex-shrink-0'>
            <Image
              priority
              // className='h-15 w-15 sm:h-10'
              src='/LOGO.SVG'
              alt='Picture of the LOGO'
              width={64}
              height={40}
            />
          </div>
          <div className='font-semibold md:text-2xl ml-4 mb-1 text-custom'>
            Zapare Technologies
          </div>
        </div>
        {/* NAV LINKS */}
        <div className='flex sm:w-full justify-evenly  font-normal  sm:invisible md:visible invisible w-0 md:text-md '>
          <Link href='/' passHref>
            <motion.a
              whileHover={{
                background: 'linear-gradient(to right, #FEDD8D 70%, white 50%)',
              }}
              animate={{
                background:
                  router.pathname == '/'
                    ? 'linear-gradient(to right, #FEDD8D 70%, white 50%)'
                    : '',
              }}
              className={`hover:text-custom `}
            >
              Home
            </motion.a>
          </Link>
          <Link href='/' passHref>
            <motion.a
              whileHover={{
                background: 'linear-gradient(to right, #FEDD8D 70%, white 0%)',

                transition: {
                  duration: 0.4,
                  ease: 'easeInOut',
                },
              }}
              className='hover:text-custom'
            >
              About us
            </motion.a>
          </Link>
          <Link href='/' passHref>
            <motion.a
              whileHover={{
                background: 'linear-gradient(to right, #FEDD8D 70%, white 50%)',
                transition: {
                  duration: 0.4,
                  ease: 'easeInOut',
                },
              }}
              className='hover:text-custom'
            >
              Services
            </motion.a>
          </Link>
          <Link href='/' passHref>
            <motion.a
              whileHover={{
                background: 'linear-gradient(to right, #FEDD8D 70%, white 50%)',
                transition: {
                  duration: 0.4,
                  ease: 'easeInOut',
                },
              }}
              className='hover:text-custom'
            >
              Career
            </motion.a>
          </Link>
          <Link href='/' passHref>
            <motion.a
              whileHover={{
                background: 'linear-gradient(to right, #FEDD8D 70%, white 50%)',
                transition: {
                  duration: 0.4,
                  ease: 'easeInOut',
                },
              }}
              className='hover:text-custom'
            >
              Contact
            </motion.a>
          </Link>
        </div>
      </div>
      <motion.div
        variants={burgermenu}
        animate='animate'
        initial='initial'
        className={`flex flex-col md:invisible ${
          isopen
            ? ' bg-sidebarcolor-Default h-screen absolute z-10 right-1 text-white '
            : 'justify-center pr-14 outline-none'
        } `}
      >
        <button onClick={() => setisopen(!isopen)} className='flex justify-end'>
          {console.log(isopen)}
          <svg viewBox='0 0 100 80' width='40' height='40'>
            <motion.rect
              variants={top}
              animate='animate'
              width='100'
              height='5'
              rx='8'
              fill={isopen ? 'white' : 'black'}
            ></motion.rect>
            <motion.rect
              variants={center}
              animate='animate'
              y='30'
              width='100'
              height='5'
              rx='8'
              fill={isopen ? 'white' : 'black'}
            ></motion.rect>
            <motion.rect
              variants={bottom}
              animate='animate'
              y='60'
              width='100'
              height='5'
              rx='8'
              fill={isopen ? 'white' : 'black'}
            ></motion.rect>
          </svg>
        </button>
        {isopen ? (
          <div className='flex flex-col '>
            <motion.span
              variants={listvariant}
              initial='initial'
              animate='animate'
              className='p-7 text-lg'
            >
              Home
            </motion.span>
            <motion.span
              variants={listvariant}
              initial='initial'
              animate='animate'
              className='p-7 text-lg'
            >
              About us
            </motion.span>
            <motion.span
              variants={listvariant}
              initial='initial'
              animate='animate'
              className='p-7 text-lg'
            >
              Services
            </motion.span>
            <motion.span
              variants={listvariant}
              initial='initial'
              animate='animate'
              className='p-7 text-lg'
            >
              Career
            </motion.span>
            <motion.span
              variants={listvariant}
              initial='initial'
              animate='animate'
              className='p-7 text-lg'
            >
              Contact
            </motion.span>
          </div>
        ) : (
          ''
        )}
      </motion.div>
    </motion.div>
  )
}

export default Navbar
