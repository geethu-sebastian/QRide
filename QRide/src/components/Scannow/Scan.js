import React, { useEffect, useState } from "react";
import bus1_image from "../Assets/bus1.png";
import { useNavigate } from "react-router-dom";

const Scan = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigateToQr = () => {
    navigate("/QR");
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageStyles = {
    maxWidth: windowWidth >= 768 ? "50%" : "100%",
    height: "auto",
    margin: "auto",
  };

  return (
    <div className="bg-green-200 min-h-screen flex flex-col items-center justify-around pl-0">
      <header className="w-full h-full flex items-center">
        <div className="flex items-center">
          <h1 className="text-black text-4xl font-bold pl-10">QRide</h1>
        </div>
      </header>
      <main className="flex flex-col items-center w-full">
        <div className="text text-center">
          <h2 className="text-4xl md:text-6xl font-bold ">Effortless Bus Travel</h2>
          <h3 className="text-4xl md:text-6xl font-bold">Scan, Know, Go!</h3>
          <p className="text-xl md:text-2xl">
            Streamline your bus journey with a single scan.
          </p>
        </div>
        <div className="busdiv w-full mb-10 md:mb-20 m-auto">
          <img
            style={imageStyles}
            src={bus1_image}
            alt="Bus"
          />
        </div>
        <button
          style={{ fontSize: "1.5rem", padding: "1rem 2rem" }}
          className="scan-button bg-black text-white rounded-full cursor-pointer transition duration-300 hover:bg-gray-700"
          onClick={navigateToQr}
        >
          Scan now
        </button>
      </main>
    </div>
  );
};

export default Scan;
