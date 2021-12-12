import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
const Services = () => {
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
          Services.
        </h1>
        <p className='md:text-left text-center font-normal text-2xl pb-10 '>
          We offer customized digital services and scalable operational
          strategies to prepare your Organization ride through the waves of
          uncertainty in the form of disruptive technology and government
          regulations so you can deliver accelerated and cost-effective services
          for your consumers
        </p>
        <div className='whitespace-pre-line text-base font-bold flex justify-center md:justify-start  pb-16 '>
          <Link href='/' passHref>
            <span className=' text-custom border-b-4 border-yellow-500 text-center md:text-left '>
              Explore Services
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Services
