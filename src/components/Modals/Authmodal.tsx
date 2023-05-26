import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Resetpassword from './Resetpassword'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { authModalState } from '@/atoms/AuthmodalAtom'

type AuthmodalProps = {}

const Authmodal:React.FC<AuthmodalProps> = () => {
    const setModalState = useSetRecoilState(authModalState)
    const authModal = useRecoilValue(authModalState)
    const handleClick = () => {
        setModalState((prev => ({...prev, isOpen: false, type: "login"})))
    }
  return (
    <>
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'></div>
        <div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
            <div className='relative w-full h-full mx-auto flex items-center justify-center'>
                <div className='bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6'>
                    <div className='flex justify-end p-2'>
                        <button
                            type='button'
                            className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
                            onClick={handleClick}
                        >
                            X
                        </button>
                    </div>
                    {authModal.type == "login" ? <Login /> : authModal.type ==  "register" ? <Signup /> : <Resetpassword /> }
                </div>
            </div>
        </div>
	</>
  )
}

export default Authmodal