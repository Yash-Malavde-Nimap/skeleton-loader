import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        textAlign: "center",
        width: "100%",
        maxWidth: "300px",
        height: "400px",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
        marginBottom: "20px",
      }}
      // onMouseOver={(e) => {
      //   e.currentTarget.style.transform = "scale(1.05)";
      //   e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
      // }}
      // onMouseOut={(e) => {
      //   e.currentTarget.style.transform = "scale(1)";
      //   e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
      // }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "50%",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "15px",
          objectFit: "cover",
        }}
      />

      <Link
        to={`/products/${product.id}`}
        style={{
          fontSize: "1.1rem",
          fontWeight: "600",
          color: "#333",
          marginBottom: "10px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "block",
          lineHeight: "1.2",
        }}
      >
        {product.title.slice(0, 50)} ...
      </Link>

      <p
        style={{
          fontSize: "0.9rem",
          color: "#555",
          height: "60px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginBottom: "10px",
        }}
      >
        {product.description.slice(0, 100)} ...
      </p>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#007bff",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        ${product.price}
      </p>

      {product.discount > 0 && (
        <span
          style={{
            backgroundColor: "#dc3545",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "20px",
            fontSize: "0.7rem",
            fontWeight: "bold",
            marginTop: "10px",
            marginRight: "4px",
          }}
        >
          {product.discount}% OFF
        </span>
      )}

      <button
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s",
          marginTop: "15px",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
