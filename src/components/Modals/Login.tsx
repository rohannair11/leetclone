import { authModalState } from '@/atoms/AuthmodalAtom'
import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

type LoginProps = {}

const Login:React.FC<LoginProps> = () => {
  const authState = useSetRecoilState(authModalState)
  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    authState((prev) => ({...prev, type }))
  }
  return (
    <div>
      <form className='space-y-6 px-6 pb-4'>
        <h3 className='text-xl font-medium text-white'>
          sign in to leetcode
        </h3>
        <div>
          <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>
            your email
          </label>
          <input type="email" name='email' id='email' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white ' placeholder='name@company.com' />
        </div>
        <div>
          <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>
            your password
          </label>
          <input type="password" name='password' id='password' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white ' placeholder='enter password' />
        </div>
        <button type='submit' className='w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange'>
          Login
        </button>
        <button className='flex w-full justify-end'>
          <a href="#" className='text-sm block text-brand-orange w-full text-right' onClick={()=> handleClick("forgotPassword")}>
            forgot password? 
          </a>

        </button>
        <div className='text-sm font-medium text-gray-500'>
          Not Registered ? {" "}
          <a href="#" className='text-blue-700 hover:underline' onClick={() => handleClick("register")}>
            Create Account
          </a>

        </div>

      </form>
    </div>
  )
}

export default Login