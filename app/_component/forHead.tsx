"use client"

import { useUser } from "@clerk/nextjs"

const ForHead = () => {
     const { isSignedIn, user} = useUser()
  return (
    <div>
        {
            isSignedIn?<p>Hi, {user.firstName}</p>:<p>Welcome Guest</p>
        }
    </div>
  )
}

export default ForHead
