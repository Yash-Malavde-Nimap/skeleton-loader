import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        backgroundColor: "#ced3af",
        borderRadius: "15px",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        textAlign: "center",
        width: "100%",
        maxWidth: "280px",
        height: "auto",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        marginBottom: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        position: "relative",
      }}
      // onMouseOver={(e) => {
      //   e.currentTarget.style.transform = "scale(1.05)";
      //   e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)";
      // }}
      // onMouseOut={(e) => {
      //   e.currentTarget.style.transform = "scale(1)";
      //   e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.1)";
      // }}
    >
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "50%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "15px",
            objectFit: "cover",
            alignSelf: "center",
          }}
        />
      </Link>

      <Link
        to={`/products/${product.id}`}
        style={{
          fontSize: "1.1rem",
          fontWeight: "600",
          color: "#333",
          marginBottom: "10px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          textWrap:"balance",
          display: "block",
          lineHeight: "1.2",
          textDecoration: "none",
        }}
      >
        {product.title.slice(0, 60)}...
      </Link>

      <p
        style={{
          fontSize: "0.9rem",
          color: "#555",
          height: "60px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          marginBottom: "15px",
          lineHeight: "1.5",
        }}
      >
        {product.description.slice(0, 100)} ...
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            color: "#007bff",
            fontWeight: "bold",
            marginBottom: "0",
          }}
        >
          ${product.price}
        </p>

        {product.discount > 0 && (
          <span
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            {product.discount}% OFF
          </span>
        )}
      </div>

      <button
        style={{
          padding: "12px 24px",
          fontSize: "1.1rem",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          marginTop: "20px",
          width: "100%",
          textTransform: "uppercase",
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
