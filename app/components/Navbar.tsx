import React from 'react'
import Link from 'next/link'
import {auth, signIn , signOut } from '@/auth'

const Navbar = async() => {

  const session = await auth();





  return (
    <header className='flex justify-between  items-center px-5 shadow-sm py-3 font-work-sans w-full bg-cover bg-center bg-white  '>
      <nav className='flex justify-between w-full items-center'>
      <div><Link href="/"><img src="/logo.png" alt="" style={{width:"50%"}} /></Link></div>
       
       {session && session?.user ? (
        <div className='nav-heading  '>
          <Link href="/create"><span >Create</span></Link>
          <Link href={`/user/${session?.id}`}><span>{session?.user?.name}</span></Link>
          <form action={async()=>{
          "use server"
          await signOut({redirectTo:"/"});
          }}>
          <button type='submit'>LogOut</button>

        </form>
        </div>
       ):(
      <div className='nav-heading '>
        <Link href="/create"><span >Create</span></Link>
        <form action={async()=>{
          "use server"
          await signIn('github');
        }}>
          <button type='submit'>Sign In</button>

        </form>
        </div>
        
       )}


      </nav>


    </header>
  )
}

export default Navbar