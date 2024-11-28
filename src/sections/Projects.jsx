/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "./../components/CanvasLoader";
import DemoComp from "../components/DemoComp";
import { Center, OrbitControls } from "@react-three/drei";

const projectCount = myProjects.length;

function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  function handleNavigation(navigation) {
    setSelectedProjectIndex((pre) => {
      if (navigation === "previous") {
        return pre === 0 ? projectCount - 1 : pre - 1;
      } else {
        return pre === projectCount - 1 ? 0 : pre + 1;
      }
    });
  }

  const currentProjects = myProjects[selectedProjectIndex];
  return (
    <section className="c-space mt-20" id="work">
      <p className="head-text">My Works</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col  gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProjects.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProjects.logoStyle}
          >
            <img
              src={currentProjects.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5 ">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProjects.title}
            </p>
            <p className="animatedText">{currentProjects.desc}</p>
            <p className="animatedText">{currentProjects.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProjects.tags.map((tag, i) => (
                <div key={i} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              href={currentProjects.href}
              target="_blank"
              rel="noreferrer"
              className=" flex items-center gap-2 cursor-pointer text-white-600"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left-arrow"
                className="w-4 h-4 "
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right-arrow"
                className="w-4 h-4 "
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={(10, 10, 5)} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComp texture={currentProjects.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default Projects;