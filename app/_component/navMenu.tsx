import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"

export const NavMenu=()=>{
    return(
      <div>

         <div className="navMenu">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
         </div>
      
          <SignedOut>
              <SignInButton mode="modal" />
              <SignUpButton mode="modal">
                <button className="bg-[#6c47ff] text-ceramic-white  font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
          </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
      </div>
    )
}

export default NavMenu;