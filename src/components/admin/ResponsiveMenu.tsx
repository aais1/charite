"use client"

import Link from "next/link";
import { FaUsers } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdOutlineStore } from "react-icons/md";

const ResponsiveMenu = ({setShowMenu,showMenu}) => {
  return (
    <aside className="">
        <header className="px-4 py-3">
          <Link href="/" className="text-white text-4xl mb-8 flex gap-x-4 items-center justify-start  font-semibold"
          onClick={()=>setShowMenu(!showMenu)}>Double'A Ventures <MdOutlineStore style={{fontSize:'2.4rem'}} /></Link>
        </header>
        <nav className="px-4 py-3 gap-y-4 font-semibold text-xl">
        <div className='space-y-8'>
          <Link href="./analytics" className="border-b pb-2 mx-auto w-[80%] flex justify-between items-center gap-x-4  mt-4 hover:text-white text-gray-200"
          onClick={()=>setShowMenu(!showMenu)}>Analytics <IoAnalyticsOutline style={{fontSize:'2rem'}} /> </Link>
          <Link href="./product-listings" className="border-b pb-2 mx-auto w-[80%] justify-between flex items-center gap-x-4 mt-4 hover:text-white text-gray-200"
          onClick={()=>setShowMenu(!showMenu)}>Products <AiFillProduct style={{fontSize:'2rem'}}/></Link>
          <Link href="./users" className="border-b pb-2 mx-auto w-[80%] justify-between mt-4 flex items-center gap-x-4 hover:text-white text-gray-200"
          onClick={()=>setShowMenu(!showMenu)}>Users <FaUsers style={{fontSize:'2rem'}}/></Link>
        </div>
        </nav>
      </aside>
  )
}

export default ResponsiveMenu