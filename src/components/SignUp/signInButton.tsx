import { signIn, signOut, useSession } from "next-auth/react";

const signOutButton = () => {
    return(
        <button>
            type = 'button'
            className = "text-white bg-blue-400"  
        </button>
    )
}