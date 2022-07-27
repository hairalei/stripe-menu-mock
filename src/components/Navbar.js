import React from "react";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import sublinks from "../data";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.dataset.page;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

  return (
    <nav className="nav" onMouseOver={closeSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {sublinks.map((link, index) => {
            const { page } = link;
            return (
              <li key={index}>
                <button
                  data-page={page}
                  className="link-btn"
                  onMouseOver={displaySubmenu}
                >
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button
          className="btn signin-btn"
          onClick={(e) => console.log(e.target.localName)}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
