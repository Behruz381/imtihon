import React from "react";
import Logo from "../../../images/QPICK.svg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="py-[15px]">
        <div className="container">
          <nav className="nav flex justify-between items-center">
            <div className="nav__left flex items-center gap-[75px]">
              <div className="nav__logo">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="nav__sort">
                <select className="p-2.5 text-gray-500 bg-[#eaeaea] shadow-sm outline-none ">
                  <option>Category</option>
                </select>
              </div>
            </div>
            <div className="nav__right flex gap-[36px]">
              <div className="nav__right--icon">
                <Link to="/fovourites">
                  <i className="bx bx-heart text-2xl cursor-pointer text-[#838383]"></i>
                </Link>
              </div>
              <div className="nav__right--icon">
                <i className="bx bx-cart text-2xl cursor-pointer text-[#838383]"></i>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
