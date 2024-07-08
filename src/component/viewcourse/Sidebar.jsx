import "../viewcourse/Sidebar.css"; // Your existing styles

import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AppContext from "./AppContext";

const Sidebar = ({ pages }) => {
  const myContext = useContext(AppContext);

  return (
    <div className={(myContext.isClickedOnMenu ? "hideSideBar " : "showSidebar ") + " sidebar-container"}>
    <div className="sidebar">
      <div className="sidebar-scroll-container">
          <ul className="sidebar-list">
          {pages.map((page) => (
            <li key={page.id} className="sidebar-item">
             <NavLink
                className={({ isActive }) => (isActive ? 'active' : 'inactive') + " sidebar-link"}
                to={page.path}
                // className="sidebar-link"
                // style={{ color: "#3a3a3a" }}
              >
                {page.title}
              </NavLink>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
