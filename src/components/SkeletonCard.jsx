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
        // gap: "20px",
        // padding:'20px',
        height: "440px",
        width: "340px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Skeleton
      circle
        width={150}
        height={140}
        baseColor="#969696"
        style={{
          marginTop: "30px",
        }}
      />
      <Skeleton
        width={250}
        height={60}
        baseColor="#969696"
        style={{
          marginTop: "20px",
        }}
      />
      <Skeleton
        width={250}
        height={120}
        baseColor="#969696"
        style={{
          marginTop: "20px",
        }}
      />
      {/* <Skeleton
        width={250}
        height={50}
        baseColor="#969696"
        style={{
          marginTop: "10px",
        }}
      /> */}
    </div>
  );
};

export default SkeletonCard;
