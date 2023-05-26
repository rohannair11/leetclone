import { authModalState } from '@/atoms/AuthmodalAtom'
import Authmodal from '@/components/Modals/Authmodal'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import { useRecoilValue } from 'recoil'

type AuthPageProps = {}

const AuthPage:React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(authModalState)
    return(
        <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
            <div className='max-w-7xl mx-auto'>
                <Navbar />  
            </div>
            <div className='flex items-center justify-center '>
                <h1 className='text-4xl my-32 text-brand-orange'>
                    The Best Way to Prepare For Your Coding Interviews. 
                </h1>
                {authModal.isOpen && <Authmodal />}
            </div>
        </div>
    )
}

export default AuthPage