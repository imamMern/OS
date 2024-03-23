import React from 'react'
import Header from '../Constants/Header'
import Footer from '../Constants/Footer'
import Image from 'next/image'
import leftArrow from '@/public/assets/leftArrow.svg'
import rightArrow from '@/public/assets/rightArrow.svg'
import Link from 'next/link'
import { Quiz2 } from '../Constants/Quiz'

const GrowthGoals = () => {
  return (
    <div className='w-[85%] md:max-w-container2 mx-auto'>
      <Header/>
      <main>
        {/* //! : This is the content and heading portion */}
      <div className="text-center mx-auto mt-[46px]">
        <p className="text-[#414A35] text-[16px] md:text-lg not-italic font-medium leading-[normal]">Share your current objectives and future targets.</p>
        <h1 className="text-[#141803] text-center text-[32px] md:text-[40px] not-italic font-bold leading-[140%] mt-[10px]">What’s the growth situation?</h1>
        </div>
        {/* //!: Here is the progress of how many steps you complete */}
        <div className="flex items-center gap-[20px] md:gap-[20px] justify-center mt-[62px] py-[16px]">
          <div className="hidden md:block">
            <div className="md:w-[187px] h-1 self-stretch rounded-[10px] bg-[#3A4046]"></div>
            <span className="text-[color:var(--Brand,#3A4046)] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-[150%]">1. Business Brief</span>
          </div>
          <div className="">
            <div className="md:w-[187px] h-1 self-stretch rounded-[10px] bg-[#1e2124]"></div>
            <span className="text-[color:var(--Brand,#1E2124)] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-[150%]">2. Growth Goals</span>
          </div>
          <div className="">
            <div className="md:w-[187px] h-1 self-stretch rounded-[10px] bg-[#D9D9D9]"></div>
            <span className="text-[color:var(--Brand,#1E2124B2)] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-[150%]">3. Company Details</span>
          </div>
        </div>
        {/* //! : Model of  the product (QUESTION/ANSWER) */}
        <div className="mt-[76px]">
          <h4 className='self-stretch text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-[normal] font-onest'>Pick your primary growth goal</h4>
          {/* //? Import Quiz2 from Quiz Component */} 
          {/* //! ITS FOR REVENUE GROWTH and USER BASE GROWTH */}
          <Quiz2/>
        </div>
        
        
        {/* //! : Two Buttons */}
      <div className="flex items-center justify-between mt-[50px] mb-[76px]">
          <Link href='/onboarding/business-brief'><button className='flex items-center gap-x-[4px]'><Image src={leftArrow} alt='Left-Arrow'/><span className='text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-6 font-onest'>Back</span></button></Link>
          <Link href='/onboarding/sign-up'><button className='flex justify-center items-center gap-1 px-[18px] text-[14px] md:text-[16px] py-2.5 bg-[#1e2124] rounded'><span className='text-white text-base not-italic font-semibold leading-6'>Next Step</span><Image src={rightArrow} alt='Right-Arrow'/></button></Link>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default GrowthGoals