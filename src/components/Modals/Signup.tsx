import { authModalState } from '@/atoms/AuthmodalAtom'
import React from 'react'
import { useSetRecoilState } from 'recoil'

type SignupProps = {}

const Signup:React.FC<SignupProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  const handleClick = () => {
    setAuthModalState((prev) => ({...prev, type: "login"}))
  }
  return (
    <div>
      <form className='space-y-6 px-6 pb-4'>
        <h3 className='text-xl font-medium text-white'>
          Register to leetcode
        </h3>
        <div>
          <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>
            email
          </label>
          <input type="email" name='email' id='email' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white ' placeholder='name@company.com' />
        </div>

        <div>
          <label htmlFor="displayName" className='text-sm font-medium block mb-2 text-gray-300'>
            username
          </label>
          <input type="displayName" name='displayName' id='displayName' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white ' placeholder='enter name' />
        </div>



        <div>
          <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>
             password
          </label>
          <input type="password" name='password' id='password' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white ' placeholder='enter password' />
        </div>


        <button type='submit' className='w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange'>
          Register
        </button>
        


        <div className='text-sm font-medium text-gray-500'>
          Got an account? {" "}
          <a href="#" className='text-blue-700 hover:underline ' onClick={handleClick}>
            Login 
          </a>

        </div>

      </form>
    </div>
  )
}

export default Signup