"use client";

import React from "react";
import Image from "next/image";
import Introduction from "./components/Introduction";
import Slideshow from "./components/Slideshow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBehanceSquare } from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop,
      });
    }
  }

  const backgroundImageStyle = {
    backgroundImage: `
      radial-gradient(circle at 100% 50%, #000 0%, transparent 80%),
      radial-gradient(circle at 40% 70%, #8C4C46 0%, transparent 40%),
      radial-gradient(circle at 70% 70%, #A67B8F 0%, #e4c9e5 100%)`, // Replace with your image path
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    filter: "brightness(70%) contrast(200%)", // Adjust as needed
    /* Other background properties like backgroundPosition, backgroundRepeat, etc. */
  };

  return (
    <>
      <section id="section1" className="h-screen">
        <div className="bg-gradient-to-b from-[#593C44] from-10% to-black ...">
          <Introduction />

          <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/pic.jpg"
              width={700}
              height={900}
              alt="Picture of the author"
              className="rounded-md hover:scale-110 hover:shadow-2xl ease-in-out duration-300"
            />
          </div>
        </div>
      </section>
      <section id="section3" className="h-screen">
        <div className="h-screen flex justify-evenly bg-black">
          <div
            className=" w-1/3 h-2/3 bg-fixed mt-2 bg-black "
            style={backgroundImageStyle}
          ></div>
          <div className="w-1/3 flex flex-wrap justify-center content-center">
            <div className="w-3/3 h-2/3 flex flex-col gap-7">
              {
                <div className="text-md text-[#A67B8F] text-2xl leading-relaxed font-black">
                  UN PROGRAMMEUR MOTIVÉ QUI RÉUSSIT À TRANSFORMER DES IDÉES EN RÉALITÉ
                   GRÂCE À L'ART DU CODAGE. ENSEMBLE, EXPLORONS LE POTENTIEL ILLIMITÉ 
                   DE LA TECHNOLOGIE ET DE L'INNOVATION.
                </div>
              }
              <div className="flex gap-7">
                <div className="text-4xl text-slate-400">
                  DÉCOUVRIR MES PROJETS →
                </div>
                <button
                  onClick={() => scrollToSection("section2")}
                  className="text-4xl hover:underline text-[#8C4F6B] hover:scale-125 ease-in-out duration-300"
                >
                  ICI
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section2" className="h-screen">
        <div className="h-screen bg-black flex justify-center">
          {/* <div className="w-1/2 flex flex-wrap justify-center content-center">
            <div className="w-2/3 flex flex-col gap-7 items-center text-center">
              <div className="text-white justify-center content-center text-5xl leading-relaxed font-black flex">
                MES PROJETS
              </div>
            </div>
          </div> */}
          <div className="w-1/2 flex flex-wrap justify-center content-center">
            <h1 className="text-6xl text-[#de8bb2] mb-6 ">MES PROJETS</h1>
            {<Slideshow />}
          </div>
        </div>
      </section>
      <section id="section4" className="h-screen">
        <div className="h-min-full h-screen bg-black flex">
          <div className="h-screen w-1/2 flex flex-wrap justify-center content-center">
            <div className="w-1/3 flex flex-col items-end place-content-center">
              <h2 className="text-8xl text-[#A67B8F]">GET</h2>
              <h2 className="text-8xl text-[#A67B8F]">IN</h2>
              <h2 className="text-8xl text-[#A67B8F]">TOUCH</h2>
            </div>
          </div>
          <div className="w-1/2 flex flex-wrap justify-center content-center">
            <div className="w-2/3 flex flex-col items-start place-content-center">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-md font-bold text-slate-400">SOCIAL</div>
                <div className="text-md font-bold text-slate-400">CONTACT</div>
                <div className="text-md font-bold text-white">
                  <a
                    href="https://www.linkedin.com/in/thu-phuong-nguyen-466b33232/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} color="#0097e6" />{" "}
                    LINKEDIN{" "}
                  </a>
                </div>
                <div className="text-md font-bold text-white">
                    NTHUPHUONG13111998@GMAIL.COM
                </div>
                <div className="text-md font-bold text-white">
                  <FontAwesomeIcon icon={faBehanceSquare} color="#1e90ff" />{" "}
                  BEHANCE{" "}
                </div>
                <div className="text-md font-bold text-white">
                  +33 6 64 95 16 74
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
