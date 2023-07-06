import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { Link } from "react-router-dom";
import { message } from "antd";
const Products = () => {
  const [products, setProducts] = useState([]);
  const BASE_URL = "http://localhost:8080"

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      message.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="">
        <div className="">
          <AdminMenu />
        </div>
        <div className="">
          <h1 className="">All Products List</h1>
          <div className="">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className=""
              >
                <div className="" style={{ width: "18rem" }}>
                  <img
                    src={`${BASE_URL}/api/v1/product/product-photo/${p._id}`}
                    className=""
                    alt={p.name}
                  />
                  <div className="">
                    <h5 className="">{p.name}</h5>
                    <p className="">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
