import { authModalState } from "@/atoms/AuthmodalAtom";
import Link from "next/link";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

type NavBarProps ={

}; 

const Navbar:React.FC<NavBarProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)
    const handleClick = () => {
        setAuthModalState((prev) => ({...prev, isOpen: true}))
    }
    return(
        <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
            <Link href="/" className="flex items-center justify-center h-20">
                <img src="/logo.png" alt="leetcode" className="h-full" />
            </Link>
            <div className="flex items-center">
                <button className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange transition duration-300 ease-in-out"
                onClick={handleClick}>
                    sign in
                </button>
            </div>
        </div>
    )
}

export default Navbar