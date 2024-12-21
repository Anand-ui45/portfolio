import { Html, useProgress } from "@react-three/drei";

function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <span className="canvas-loader" />
      <div className="w-64 border-2 border-white h-7 overflow-hidden">
        <div
          className="bg-white h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 10,
        }}
      >
        {progress !== 0 ? `Loading ${progress.toFixed(2)}%...` : "Loading..."}
      </p>
    </Html>
  );
}

export default CanvasLoader;
