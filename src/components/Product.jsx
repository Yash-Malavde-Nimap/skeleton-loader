/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
      // console.log(res.data.product);
      setProduct(res.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <>
      {!product ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className="spinner"></div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "0 20px",
            background: "#f5f5f5",
            minHeight: "100vh",
          }}
        >
          
          {/* Product Image */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "900px",
              textAlign: "center",
              marginTop: "40px",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                maxWidth: "300px",
                height: "auto",
                borderRadius: "10px",
                objectFit: "contain",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
            <div>
              <h1
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                  marginLeft: "7px",
                }}
              >
                {product.title}
              </h1>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px 20px",
                }}
              >
                {product.discount > 0 && (
                  <p
                    style={{
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      padding: "5px 10px",
                      borderRadius: "20px",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    {product.discount}% OFF
                  </p>
                )}
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#007bff",
                  }}
                >
                  ${product.price}
                </p>
                <button
                  style={{
                    padding: "12px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "25px",
                    cursor: "pointer",
                    transition: "background-color 0.3s, transform 0.2s",
                  }}
                >
                  Buy Now
                </button>
                <button
                  style={{
                    padding: "12px 20px",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "25px",
                    cursor: "pointer",
                    transition: "background-color 0.3s, transform 0.2s",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div
            style={{
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.6",
              marginBottom: "20px",
              marginTop: "20px",
              textAlign: "justify",
              width: "900px",
            }}
          >
            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: "800",
                marginBottom: "10px",
                textDecoration: "underline",
              }}
            >
              Description
            </h3>
            <p>{product.description}</p>
          </div>

          {/* Product Details */}
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              padding: "15px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
              marginTop: "40px",
            }}
          >
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              Product Details
            </h3>
            <p
              style={{ fontSize: "1rem", color: "#555", marginBottom: "10px" }}
            >
              <strong>Brand:</strong> {product.brand}
            </p>
            <p
              style={{ fontSize: "1rem", color: "#555", marginBottom: "10px" }}
            >
              <strong>Model:</strong> {product.model}
            </p>
            <p
              style={{ fontSize: "1rem", color: "#555", marginBottom: "10px" }}
            >
              <strong>Color:</strong> {product.color}
            </p>
            <p
              style={{ fontSize: "1rem", color: "#555", marginBottom: "10px" }}
            >
              <strong>Category:</strong> {product.category}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
