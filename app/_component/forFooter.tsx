'use client'
import { useUser } from "@clerk/nextjs"

const ForFooter = () => {
  const {isSignedIn,user} =useUser()
  return (
    <div>
       {
        isSignedIn?<strong>{user.emailAddresses[0].emailAddress}</strong>:null
       }
    </div>
  )
}

export default ForFooter
