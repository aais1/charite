"use client"
// @ts-ignore
import { AdminSideBar , ResponsiveMenu } from '../../components/admin';
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const AdminLayout = ({children}) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="d-flex">
      <div className="d-none vh-100 d-md-block col-md-2">
        <AdminSideBar />
      </div>
      <div className="col-12 col-md-10 p-3 min-vh-100 bg-light">
        {children}
        <div 
          className={`d-md-none cursor-pointer h1 text-dark font-weight-bold position-absolute top-0 end-0 m-4 ${showMenu ? 'd-none' : ''}`} 
          onClick={() => setShowMenu(!showMenu)}
        >
          <AiOutlineMenu /> 
        </div>
      </div>

      {/* Responsive */}
      
      {showMenu && (
        <div className="d-md-none position-absolute vh-100 w-100 bg-dark bg-opacity-75">
          <div 
            className="cursor-pointer h1 text-white font-weight-bold position-absolute top-0 end-0 m-4"
            onClick={() => setShowMenu(!showMenu)}
          >
            <RxCross2 /> 
          </div>

          <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
        </div>
      )}
    </div>
  );
}

export default AdminLayout;
