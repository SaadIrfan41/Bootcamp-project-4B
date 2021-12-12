import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
const Aboutus = () => {
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
  })
  return (
    <motion.div ref={ref} animate={animationControl}>
      <div className=' max-w-xl'>
        <h1 className='text-4xl font-bold md:text-7xl mb-16 text-custom text-center md:text-left  '>
          We Are
        </h1>
        <p className='md:text-left text-center font-normal text-2xl pb-10 '>
          A highly specialized Management team with over 20 combined years of
          experience in the Healthcare industry with proven ability to optimally
          combine digital technology, skilled resources and efficient business
          processes to implement creative as well as proven market solutions to
          suit an ever-evolving market. Our forte has been to successfully
          tailor our solutions to support your needs whether it is in the space
          of Consulting, Product Management or Service Delivery
        </p>
        <div className='whitespace-pre-line text-base font-bold flex justify-center md:justify-start  pb-16 '>
          <Link href='/' passHref>
            <span className=' text-custom border-b-4 border-yellow-500 text-center md:text-left '>
              About Us
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Aboutus
