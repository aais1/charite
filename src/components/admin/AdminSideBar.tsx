"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUsers } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { IoAnalyticsOutline } from "react-icons/io5";
import { MdOutlineStore } from "react-icons/md";

const AdminSideBar = () => {
  const router = useRouter();
  return (
    <aside style={{width:'17%'}} className="bg-dark position-fixed top-0 vh-100">
      <header className="px-3 py-3">
        <div className="text-white h4 d-flex align-items-center justify-content-between font-weight-semibold">
          Admin <MdOutlineStore style={{ fontSize: "2.4rem" }} />
        </div>
      </header>
      <nav className="px-3 py-3 d-flex flex-column gap-3 font-weight-semibold h5">
        <Link
          href="/admin/blogs"
          className="d-flex justify-content-between align-items-center mt-3 text-secondary hover-text-white"
        >
          Blogs <IoAnalyticsOutline style={{ fontSize: "2rem" }} />{" "}
        </Link>
        <Link
          href="/admin/causes"
          className="d-flex justify-content-between align-items-center mt-3 text-secondary hover-text-white"
        >
          Causes <AiFillProduct style={{ fontSize: "2rem" }} />
        </Link>
        <Link
          href="/admin/events"
          className="d-flex justify-content-between align-items-center mt-3 text-secondary hover-text-white mb-3"
        >
          Events <FaUsers style={{ fontSize: "2rem" }} />
        </Link>
        <Link
          href="/admin/portfolio"
          className="d-flex justify-content-between align-items-center mt-3 text-secondary hover-text-white mb-3"
        >
          Portfolio <FaUsers style={{ fontSize: "2rem" }} />
        </Link>
        <hr />
        <button 
          className="w-100 py-2 font-weight-semibold text-dark border border-white mt-3 rounded-pill hover-bg-white hover-text-dark transition-all"
          onClick={() => {
            router.push('../admin')
          }}
        >
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default AdminSideBar;
