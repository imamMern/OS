import React from 'react'
import Header from '../Constants/Header'
import Footer from '../Constants/Footer'
import Image from 'next/image'
import leftArrow from '@/public/assets/leftArrow.svg'
import rightArrow from '@/public/assets/rightArrow.svg'
import Link from 'next/link'
import {Industry, Company} from '@/styles'
const CompanyDetails = () => {
  
  return (
    <div className='w-[85%] md:max-w-container2 mx-auto'>
      <Header />
      <main>
      <div className="text-center mx-auto mt-[46px]">
        <p className="text-[#414A35] text-[16px] md:text-lg not-italic font-medium leading-[normal]">Let’s give context to your future growth team.</p>
        <h1 className="text-[#141803] md:w-[530px] mx-auto text-center md:text-[40px] text-[28px] not-italic font-bold leading-[140%] mt-[10px]">Share some more about your role and the company.</h1>
        </div>
        {/* //! Progress */}
        <div className="flex items-start md:items-center gap-[20px] md:gap-[60px] justify-center mt-[62px]">
          <div className="hidden md:block">
            <div className="md:w-[160px] h-1 self-stretch rounded-[10px] bg-[#3A4046]"></div>
            <span className="text-[#1E2124] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-[150%]">1. Business Brief</span>
          </div>
          <div className="">
            <div className="md:w-[160px] h-1 self-stretch rounded-[10px] bg-[#3A4046]"></div>
            <span className="text-[#1E2124] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-[150%]">2. Growth Goals</span>
          </div>
          <div className="">
            <div className="md:w-[160px] h-1 self-stretch rounded-[10px] bg-[#1E2124]"></div>
            <span className="text-[#1E2124] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-[150%]">3. Company Details</span>
          </div>
        </div>
        {/*//? Data From users(Company details) */}
        <form action="">
        <div className="md:mt-[96px] mt-[50px] mx-auto flex flex-col md:gap-y-[20px] gap-y-[30px]">
        {/* //! Role & Industry */}
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-[30px] self-stretch">
        <div className="flex flex-col items-start md:items-start gap-y-[12px] self-stretch">
                <span className="text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-[normal]">Role</span>
                <input type="text" required className='h-[37px] self-stretch border border-[color:var(--brand-7,#B9BFC5)] rounded-md border-solid bg-white outline-none md:w-[285px] px-3' />
            </div>
        <div className="flex flex-col items-start gap-y-[12px] self-stretch">
        <label className='text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-[normal]' >Industry</label>
      <select className='h-[37px] self-stretch border border-[color:var(--brand-7,#B9BFC5)] rounded-md border-solid bg-white md:w-[285px] px-3 text-[color:var(--brand-7,#B9BFC5)] focus:outline-none' >
          <option disabled selected className='text-[color:var(--brand-7,#B9BFC5)] text-base font-normal' value="">Type or select an option</option>
          {Industry.map((data) => (
            <option className='text-base font-normal text-[#1E2124]' key={data.name} value={data.value}>{data.name}</option>
          ))}
      </select>
      </div>
          </div>
          {/* //!Company Size & Website */}
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-[30px] self-stretch">
          <div className="flex flex-col items-start gap-y-[12px] self-stretch">
        <label className='text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-[normal]' >Company Size</label>
      <select className='h-[37px] self-stretch border border-[color:var(--brand-7,#B9BFC5)] rounded-md border-solid bg-white md:w-[285px] px-3 text-[color:var(--brand-7,#B9BFC5)] focus:outline-none' >
          <option disabled selected className='text-[color:var(--brand-7,#B9BFC5)] text-base font-normal' value="">Type or select an option</option>
          {Company.map((data) => (
            <option className='text-base font-normal text-[#1E2124]' key={data.name} value={data.value}>{data.name}</option>
          ))}
      </select>
      </div>
        <div className="flex flex-col items-start md:items-start gap-y-[12px] self-stretch">
                <span className="text-[color:var(--brand-8,#3A4046)] text-base not-italic font-medium leading-[normal]">Website</span>
                <input type="url" required className='h-[37px] self-stretch border border-[color:var(--brand-7,#B9BFC5)] rounded-md border-solid bg-white outline-none md:w-[285px] px-3' />
            </div>
        
          </div>
          {/* //! Two Buttons */}
          <div className="flex items-center justify-between mt-[50px] md:mb-[272px] mb-[120px]">
          <Link href='/onboarding/verification'><button className='flex items-center gap-x-[4px]'><Image src={leftArrow} alt='Left-Arrow' /><span className='text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-6 font-onest'>Back</span></button></Link>
          
          <Link href='/onboarding/meet-team'><button type='submit' className='flex justify-center items-center gap-1 px-[18px] text-[14px] md:text-[16px] py-2.5 bg-[#1e2124] rounded'><span className='text-white text-base not-italic font-semibold leading-6'>Next Step</span><Image src={rightArrow} alt='Right-Arrow'/></button></Link>
        </div>
        </div>
        </form>
       
        
     
      </main>
      <Footer/>
    </div>
  )
}

export default CompanyDetails