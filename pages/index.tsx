import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Team from '../components/Team'
import TextCarousel from '../components/TextCarousel'
import Link from 'next/link'
import Aboutus from '../components/Aboutus'
import Team2 from '../components/Team2'
import Image from 'next/image'
import Services from '../components/Services'
import ServicesBox from '../components/ServicesBox'
import Team3 from '../components/Team3'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div className='transition-all'>
      <div>
        <Navbar />
      </div>
      {/* HOME PAGE FIRST SECTION */}
      <div className='  '>
        <div className='flex items-center flex-wrap lg:flex-nowrap justify-evenly '>
          <div className='max-w-4xl w-full'>
            <Team />
          </div>
          <div className='w-full '>
            <TextCarousel />
          </div>
        </div>
      </div>
      {/* HOME PAGE Aboud us SECTION */}
      <div className='flex items-center flex-wrap-reverse lg:flex-nowrap justify-evenly'>
        <div className=' md:pl-16  pt-20'>
          <Aboutus />
        </div>
        <div className='max-w-4xl'>
          <Team2 />
        </div>
      </div>

      {/* HOME PAGE Services SECTION */}
      <div className='md:pb-10 md:pl-28 flex flex-wrap justify-evenly lg:flex-nowrap'>
        <div className='flex flex-wrap lg:flex-nowrap  '>
          <ServicesBox />
        </div>
        <div className='lg:pl-20'>
          <Services />
        </div>
      </div>
      {/* HOME PAGE Froth SECTION */}
      <div style={{ backgroundColor: '#003a78' }}>
        <div>
          {' '}
          <h1 className='text-2xl p-5  font-bold md:text-5xl mb-16 text-center md:text-left text-white md:p-10'>
            Economical,
            <br />
            dynamic and managed business solutions
          </h1>
        </div>
        <div className='flex lg:flex-nowrap flex-wrap'>
          <div className='md:p-10  p-5'>
            <h1 className='text-2xl font-bold md:text-xl mb-10 text-center md:text-left text-white'>
              Improved efficiency
            </h1>
            <p
              style={{ color: '#b1cfef' }}
              className='text-lg font-normal md:text-lg mb-10 text-center md:text-left text-white'
            >
              By reducing the burden of managing support functions, staffing and
              day to day operations, your business can concentrate further on
              core...
            </p>
          </div>
          <div className='md:p-10  p-5'>
            <h1 className='text-2xl font-bold md:text-xl mb-10 text-center md:text-left text-white'>
              Reduced Cost
            </h1>
            <p
              style={{ color: '#b1cfef' }}
              className='text-lg font-normal md:text-lg mb-10 text-center md:text-left text-white'
            >
              Our solutions are crafted to bring effective change in your
              business by ensuring cost-effective and reliable operation
              methodologies.
            </p>
          </div>
          <div className='md:p-10  p-5'>
            <h1 className='text-2xl font-bold md:text-xl mb-10 text-center md:text-left text-white'>
              Overarching Impact
            </h1>
            <p
              style={{ color: '#b1cfef' }}
              className='text-lg font-normal md:text-lg mb-10 text-center md:text-left'
            >
              By ensuring quality process management we can ensure a
              comprehensive impact on your business.
            </p>
          </div>
        </div>
      </div>

      {/* HOME PAGE Fifth SECTION */}
      <div className='flex items-center justify-center flex-wrap lg:flex-nowrap'>
        <div className='md:max-w-4xl w-full max-w-7xl'>
          <Team3 />
        </div>
        <div>
          <h1 className='text-xl p-5  font-bold md:text-3xl lg:text-5xl pb-5 text-center md:text-left text-custom md:pl-10'>
            Talk to our experts
            <br />
            about your requirements
          </h1>
          <p className='text-lg md:pl-10 font-normal md:text-lg mb-10 text-center md:text-left text-custom'>
            Contact us and know more about how our experts can help your
            business grow.
          </p>
          <div className='whitespace-pre-line md:pl-10 text-base font-bold flex justify-center md:justify-start  pb-16 '>
            <Link href='/' passHref>
              <span className=' text-custom border-b-4 border-yellow-500 text-center md:text-left '>
                Enquire Now
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* HOME PAGE Footer SECTION */}
      <div
        style={{ backgroundColor: '#002348' }}
        className='w-screen max-w-full '
      >
        <div className=' text-center justify-center flex p-10 pt-10 flex-col  '>
          <div className='w-full flex justify-center'>
            <div className=' flex-shrink-0 w-20 h-14  '>
              <Logo />
            </div>
          </div>
          <h2 className='text-xl p-5  font-bold md:text-3xl lg:text-5xl pb-5 text-white md:pl-10'>
            Care To Join Us?
          </h2>
          <p className='text-lg md:pl-10 font-normal md:text-lg mb-10 text-white'>
            Embark on an exciting career with us to learn and grow alongside the
            best in the industry
          </p>
          <div className='whitespace-pre-line md:pl-10 text-base font-bold   pb-16 '>
            <Link href='/' passHref>
              <span className='  border-b-4 border-yellow-500 text-white '>
                Enquire Now
              </span>
            </Link>
          </div>
        </div>
        <div className=' border border-gray-300 lg:max-w-7xl max-w-lg  mx-auto' />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Index
