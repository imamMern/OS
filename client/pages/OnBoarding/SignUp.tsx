import React from 'react'
import Header from '../Constants/Header'
import Footer from '../Constants/Footer'
import Image from 'next/image'
import linkedin from '@/public/assets/linkedin.svg'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className='w-[85%] md:max-w-container2 mx-auto'>
      <Header />
      <main>
      <div className="text-center mx-auto mt-[46px]">
        <p className="text-[#414A35] text-[16px] md:text-lg not-italic font-medium leading-[normal]">We’re nearly there.</p>
        <h1 className="text-[#141803] text-center md:text-[40px] text-[28px] not-italic font-bold leading-[140%] mt-[10px]">Create an account to save details and meet your team!</h1>
        </div>
        <div className="flex flex-col items-center flex-[1_0_0] self-stretch mt-[50px] md:mt-[96px] md:mb-[257px] mb-[100px] ">
          
           {/* //! Linkedin Button */}
        <button className="flex justify-center items-center gap-[7.142px] px-3.5 py-[7px] rounded bg-[#0a66c2]">
        <Image src={linkedin} alt='Left-Arrow' /><span className='text-[color:var(--Light,#FFF)] text-[19.045px] not-italic font-semibold leading-[28.568px]'>Connect Linkedin</span>
          </button>
          {/* //!: Signup details and Create account */}
          <div className="flex flex-col gap-y-[24px] md:items-start ">
            <div className="flex md:flex-row flex-col md:w-[400px] self-stretch items-start gap-5 mt-[30px]">
              {/* //!First name */}
              <div className="flex flex-col items-start gap-1.5 self-stretch">
                <span className="text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-sm not-italic font-normal leading-[normal]">First Name</span>
                <input type="text" placeholder='First Name' required className='flex md:w-[190px] items-center gap-2 self-stretch px-3 py-2.5 border border-[color:var(--brand-7,#B9BFC5)] rounded-md border-solid
  bg-white placeholder:text-[color:var(--brand-7,#B9BFC5)] placeholder:text-base placeholder:font-normal placeholder:leading-6 outline-none' />
              </div>
                {/* //!Last name */}
              <div className="flex flex-col items-start gap-1.5 self-stretch">
                <span className="text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-sm not-italic font-normal leading-[normal]">Last Name</span>
                <input type="text" placeholder='Last Name' required className='flex md:w-[190px] items-center gap-2 self-stretch px-3 py-2.5 border border-[color:var(--brand-7,#B9BFC5)] rounded-md border-solid
  bg-white placeholder:text-[color:var(--brand-7,#B9BFC5)] placeholder:text-base placeholder:font-normal placeholder:leading-6 outline-none' />
              </div>
            </div>
            {/* //! Email & Password fields */}
            <div className="flex flex-col items-start gap-1.5 self-stretch">
                <span className="text-[color:var(--brand-70,rgba(30,33,36,0.70))] text-sm not-italic font-normal leading-[normal]">Email</span>
                <input type="email" placeholder='Enter your email' required className='flex items-center gap-2 self-stretch px-3 py-2.5 border border-[color:var(--brand-7,#B9BFC5)] rounded-md border-solid
  bg-white placeholder:text-[color:var(--brand-7,#B9BFC5)] placeholder:text-base placeholder:font-normal placeholder:leading-6 outline-none' />
            </div>
            {/* //! Submit button */}
            <Link href='/onboarding/verification'>
            <button type='submit' className='flex w-full md:w-[400px] justify-center items-center gap-1 rounded px-[18px] py-2.5 
  bg-[#1e2124] text-white text-base not-italic font-semibold leading-6'>Create Account</button>
            </Link>

          <span className="mx-auto text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-center text-xs not-italic font-normal leading-[160%]">By clicking create account, you’re agreeing to our<br /><span className="text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-xs not-italic font-normal leading-[160%] underline">Terms and Conditions</span>, and <span className="text-[color:var(--brand-50,rgba(30,33,36,0.50))] text-xs not-italic font-normal leading-[160%] underline">Privacy Policy.</span></span>

          </div>
</div>

       
      </main>
      <Footer />
    </div>
  )
}

export default SignUp