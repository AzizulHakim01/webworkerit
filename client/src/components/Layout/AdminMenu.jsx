import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="">
        <div className="">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-product"
            className=""
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className=""
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className=""
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
