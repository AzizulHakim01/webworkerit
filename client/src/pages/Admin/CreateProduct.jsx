import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import axios from "axios";
import { Select, message } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");


  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      const { data } = axios.post(
        "http://localhost:8080/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        message.error(data?.message);
      } else {
        message.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout >
      <div className="">
        <div className="">
          <div className="">
            <AdminMenu />
          </div>
          <div className="">
            <h1>Create Product</h1>
            <div className="">
              
              <div className="">
                <label className="">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="">
                {photo && (
                  <div className="">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className=""
                    />
                  </div>
                )}
              </div>
              <div className="">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className=""
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="">
                <input
                  type="number"
                  value={price}
                  placeholder="write a Price"
                  className=""
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="">
                <input
                  type="number"
                  value={quantity}
                  placeholder="write a quantity"
                  className=""
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className=""
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="">
                <button className="" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
