import { React, useRef, useState, useEffect } from "react";
import images from "../assets/images";
import Image from "next/image";
import Link from "next/link";
import slide1 from '../../public/slide1.png'
import slide2 from '../../public/slide2.png'
import logo from '../../public/react.png'
import logo1 from '../../public/Js.png'
import logo2 from '../../public/Angular.png'
import logo3 from '../../public/tailwind.png'
import logo4 from '../../public/mongodb.png'
import logo5 from '../../public/nodejs.png'

export default function Slideshow() {
  const links = [
    "https://github.com/Phuongnee/BookLand/tree/main",
    "https://github.com/Phuongnee/ProjetBDGP/tree/master",
    // ajoutez plus de liens si nécessaire
  ];
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const texts = [
    "Bienvenue dans l'application de gestion de bibliothèque ! Grâce à l'API Google Library, j'ai créé un outil simple et efficace pour vous aider à trouver les livres que vous recherchez. ",
    "Bienvenue dans l'application de recherche de films ! Avec une interface conviviale et des fonctionnalités de recherche avancées, trouvez rapidement et facilement les films qui correspondent à vos goûts et à vos envies.",
    // ajoutez plus de textes si nécessaire
  ];
  const titles = [
    "BookLand",
    "ProjetBDGP",
    // ajoutez plus de titres si nécessaire
  ];

  return (
    <div className="w-2/3 flex justify-center">
      {images.slice(0, 2).map((image, index) => {
        return (
          <div
            key={index}
            className="px-10 min-h-custom min-w-custom flex flex-row flex-wrap justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-4 bg-black border-2 border-[#8C4F6B] hover:border-[#A67B8F] transition-colors duration-300 text-[#8C4F6B] font-bold py-2 px-4 rounded transform hover:scale-110 transition-transform duration-200 transition-colors duration-500 shadow-md">
              <Image
                src={image}
                width={350}
                height={400}
                alt={`Image ${index + 1}`}
                className="rounded-md w-full h-auto pointer-events-none  "
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl text-[#8C4F6B] font-bold justify-center content-center flex mt-4">
                  {titles[index]}
                </h1>
                <p className=" text-slate-400 font-light">
                  {texts[index]}
                </p>
                <div className="flex flex-row justify-center">
                  {index === 0 ? (
                    <Image
                      src={logo}
                      width={50}
                      height={50}
                      alt="Logo"
                      className="mt-4"
                    />
                  ) : (
                    <Image
                      src={logo2}
                      width={50}
                      height={50}
                      alt="Logo 2"
                      className="mt-4"
                    />
                  )}
                  {index === 1 ? (
                    <Image
                      src={logo4}
                      width={50}
                      height={50}
                      alt="Logo 4"
                      className="mt-4"
                    />
                  ) : (
                    <Image
                      src={logo1}
                      width={50}
                      height={50}
                      alt="Logo "
                      className="mt-4"
                    />
                  )}
                  {index === 2 ? (
                    <Image
                      src={logo5}
                      width={50}
                      height={50}
                      alt="Logo 3"
                      className="mt-4"
                    />
                  ) : (
                    <Image
                      src={logo3}
                      width={50}
                      height={50}
                      alt="Logo 2"
                      className="mt-4"
                    />
                  )}
                  {index === 3 ? (
                    <Image
                      src="/js.png"
                      width={50}
                      height={50}
                      alt="Logo 3"
                      className="mt-4"
                    />
                  ) : (
                    <Image
                      src="/nodejs.png"
                      width={50}
                      height={50}
                      alt="Logo 2"
                      className="mt-4"
                    />
                  )}
                </div>
                <div className="flex flex-row justify-center items-center gap-4">
                  <button
                    className="w-1/2 bg-[#A67B8F] hover:bg-[#593C44] text-white font-bold py-2 px-4 rounded-lg mt-4 mb-4 transform hover:scale-110 transition-transform duration-200 transition-colors duration-500 shadow-md"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Link href={links[index]}>Voir Projet</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
