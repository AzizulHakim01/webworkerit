import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className=""
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className=""
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
