/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";
// import SkeletonCard from "./SkeletonCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://fakestoreapi.in/api/products?limit=20"
      );
      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.in/api/products/category"
      );
      setCategories(res.data.categories);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProductsByCategory = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${category}`
      );
      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (category != "") {
      fetchProductsByCategory();
    } else {
      fetchProducts();
    }
  }, [category]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2
        style={{
          padding: "10px 20px",
          // marginLeft: "30px",
          fontFamily: "cursive",
          fontSize: "1.6rem",
        }}
      >
        All Products
      </h2>

      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <h3 style={{ fontSize: "1.2rem",
          
          
         }}>Filters</h3>

        <select
          name="category"
          onChange={handleSelect}
          value={category}
          style={{
            width: "20%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            backgroundColor: "#fafafa",
            cursor: "pointer",
            transition: "border-color 0.3s ease",
          }}
        >
          <option value="" disabled>
            -- Select Category --
          </option>
          <option value="">ALL</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(300px, 1fr))",
          gap: "20px",
          justifyItems: "center",
          padding: "30px 0px",
        }}
      >
        {loading
          ? Array(8)
              .fill()
              .map((_, index) => <SkeletonCard key={index} />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Products;
