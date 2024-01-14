import React from 'react'
import { SignInButton, SignUpButton, SignOutButton,SignedIn, UserButton, SignedOut } from '@clerk/clerk-react'
import NavItems from './NavItems'
import { logo } from '../assets/images'


const Header = () => {
  return (
    <header className="w-full border-b justify-center items-center flex-col py-4">
    <div className="wrapper flex items-center justify-between">
        <div>
        <img src={logo} alt="logo" className='w-[60px] h-[60px]' />
        </div>
        <SignedIn>
        <div>
        <NavItems />
        </div>
        </SignedIn>
        
        
        <div className="flex w-50 justify-end gap-3">
            <SignedOut>
            
            <SignInButton className='purple_btn' />
            </SignedOut>
            <SignedIn>
                <UserButton afterSignOutUrl='/'/>
            </SignedIn>
            
        </div>
        
    </div>
    
    </header>
  )
}

export default Header