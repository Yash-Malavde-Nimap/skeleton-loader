import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SkeletonCard from "./SkeletonCard";
// import SkeletonCard from "./SkeletonCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://fakestoreapi.in/api/products?limit=10"
      );
      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* <div style={{ width: "20%", height: "100%" }}>
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>Filters</h2>
      </div> */}

      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(300px, 1fr))",
          gap: "20px",
          justifyItems: "center",
          padding: "20px",
        }}
      >
        {loading
          ? Array(10)
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
