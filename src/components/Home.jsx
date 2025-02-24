import ProductCard from "./ProductCard";
import SkeletonLoader from "./SkeletonCard";

const Home = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  };

  const subheadingStyle = {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "40px",
  };

  const buttonStyle = {
    padding: "15px 30px",
    fontSize: "1.2rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    marginBottom: "40px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  const handleButtonClick = () => {
    // Assuming the "products" page is at "/products"
    window.location.href = "/products";
  };

  const product = {
    id: 1,
    title:
      "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
    image:
      "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    price: 773,
    description:
      "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
    brand: "sony",
    model: "WH-1000XM3",
    color: "silver",
    category: "audio",
    discount: 11,
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={headingStyle}>Welcome to Our Store!</h1>
        <p style={subheadingStyle}>
          Find the best products at unbeatable prices.
        </p>
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
          onClick={handleButtonClick}
        >
          Shop Now
        </button>
      </div>

      <div style={{ display: "flex", gap: "30px" }}>
        <div>
          <h2 style={{ marginBottom: "20px" }}>Skeleton Loader</h2>
          <SkeletonLoader />
        </div>

        <div>
          <h2 style={{ marginBottom: "20px" }}>Product Card</h2>
          <ProductCard product={product} />
        </div>
      </div>
    </div>
  );
};

export default Home;
