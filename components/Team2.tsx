import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
const Team2 = () => {
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
      <Image src='/Team.svg' height={800} width={1080} alt='Team' />
    </motion.div>
  )
}

export default Team2
