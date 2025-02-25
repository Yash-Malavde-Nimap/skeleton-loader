import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        height: "440px",
        width: "320px",
        backgroundColor: "#ced3af",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* IMAGE */}
      <Skeleton
        // circle
        width={150}
        height={140}
        baseColor="#dbdbdb"
        style={{
          marginTop: "30px",
          borderRadius:'15px'
        }}
      />
      {/* TITLE */}
      <Skeleton
        width={250}
        height={50}
        baseColor="#dbdbdb"
        style={{
          marginTop: "20px",
        }}
      />
      {/* DESCRIPTION */}
      <Skeleton
        width={250}
        height={50}
        baseColor="#dbdbdb"
        style={{
          marginTop: "20px",
        }}
      />

      {/* PRICE AND DISCOUNT */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          gap: "20px",
        }}
      >
        <Skeleton
          width={80}
          height={30}
          baseColor="#dbdbdb"
          style={{
            marginTop: "20px",
          }}
        />
        <Skeleton
          width={80}
          height={30}
          baseColor="#dbdbdb"
          style={{
            marginTop: "20px",
          }}
        />
      </div>

      {/* ADD CART BUTTON */}
      <Skeleton
        width={250}
        height={40}
        baseColor="#dbdbdb"
        style={{
          marginTop: "20px",
        }}
      />
      {/* <Skeleton
        width={250}
        height={50}
        baseColor="#dbdbdb"
        style={{
          marginTop: "10px",
        }}
      /> */}
    </div>
  );
};

export default SkeletonCard;
