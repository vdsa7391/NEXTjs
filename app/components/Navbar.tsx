import React from 'react'
import Link from 'next/link'
import {auth, signIn , signOut } from '@/auth'

const Navbar = async() => {

  const session = await auth();





  return (
    <header className='flex justify-between px-5 shadow-sm py-3 font-work-sans bg-white'>
      <nav className='flex justify-between gap-10 items-center '>
       <Link href="/"><img src="/logo.png" alt="" /></Link>
       {session && session ?.user ? (
        <>
          <Link href="/create"><span>Create</span></Link>
          <Link href={`/user/${session?.id}`}><span>{session?.user?.name}</span></Link>
          <form action={async()=>{
          "use server"
          await signOut({redirectTo:"/"});
          }}>
          <button type='submit'>LogOut</button>

        </form>
        </>
       ):(
      
        <form action={async()=>{
          "use server"
          await signIn('github');
        }}>
          <button type='submit'>Sign In</button>

        </form>
        
       )}


      </nav>


    </header>
  )
}

export default Navbar