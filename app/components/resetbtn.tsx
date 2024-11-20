"use client"
import Link from 'next/link'
import { RxCross2 } from "react-icons/rx";

const resetbtn = () => {
  

    const reset = ()=>{
      const form = document.querySelector<HTMLFormElement>(".search_form");
      if (form) {
          form.reset(); // Safely call reset() because of the type
      }
    }



  return (
    <button onClick={reset} className="search_form-btn"><Link href={"/"}><RxCross2 /></Link></button>
  )
}

export default resetbtn