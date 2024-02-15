import React from "react";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#593C44] from-10% to-black ... flex">
      <div className="absolute top-1/2 left-1/4 w-1/2 -translate-y-1/2 -translate-x-1/2 h-2/3 flex justify-center">
        <div className="w-2/3 flex flex-col place-content-center">
          <h1 className="text-white text-4xl leading-relaxed font-black">
            Salut ! <br /> Je suis{" "}
            <span className="text-[#A67B8F] bg-clip-text">Phuong Nguyen</span>
          </h1>
          <h1 className="text-md text-2xl font-bold text-slate-400 mt-2">
            Bienvenue sur mon Portfolio ! Je suis étudiante en MIASHS spécialisé
            en développement web, passionné par la création d’expériences
            numériques fluides. Maîtrise des technologies frontend et backend,
            engagé envers l’innovation et l’apprentissage continu.
          </h1>
          <div className="flex justify-center items-center">
            <Link href="https://github.com/Phuongnee/CV-PhuongNGUYEN/blob/main/CVPhuong-NGUYEN.pdf">
              <button className=" mt-4 bg-black border-2 border-[#8C4F6B] hover:border-[#A67B8F] transition-colors duration-300 text-[#8C4F6B] font-bold py-2 px-4 rounded transform hover:scale-110 transition-transform duration-200 transition-colors duration-500 shadow-md">
                Mon CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
