import React from 'react'
import Header from '../Constants/Header'
import Footer from '../Constants/Footer'
import Image from 'next/image'
import rightArrow from '@/public/assets/rightArrow.svg'
import Link from 'next/link'
import AddRemove from '../Helpers/AddRemove'

const InviteMember = () => {
  return (
    <div className='w-[85%] md:max-w-container2 mx-auto'>
      <Header />
      <main>
      <div className="text-center mx-auto mt-[46px]">
        <p className="text-[#414A35] text-[16px] md:text-lg not-italic font-medium leading-[normal]">Let’s get growth sorted!</p>
        <h1 className="text-[#141803] text-center md:text-[40px] text-[28px] not-italic font-bold leading-[140%] mt-[10px]">OS works better<br />with your team.</h1>
        </div>
          {/* //* Get data From Users */}
       <AddRemove/>
           {/* //! Two Buttons (Next & Skip) */}
           <div className="flex items-center justify-between mt-[50px] md:mb-[394px] mb-[180px]">
          <Link href='/onboarding/business-brief'><button className='flex items-center gap-x-[4px]'><span className='text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-[14px] md:text-[16px] text-base not-italic font-semibold leading-6 font-onest'>Skip</span></button></Link>
          
          <Link href='/onboarding/invite-member'><button type='submit' className='flex justify-center items-center gap-1 px-[18px] text-[14px] md:text-[16px] py-2.5 bg-[#1e2124] rounded'><span className='text-white text-base not-italic font-semibold leading-6'>Next Step</span><Image src={rightArrow} alt='Right-Arrow'/></button></Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default InviteMember