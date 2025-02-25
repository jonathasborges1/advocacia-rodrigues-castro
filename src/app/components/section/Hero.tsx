"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <header
      id="hero"
      className="relative w-full h-screen flex items-center justify-center px-16"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-y-0 right-0 w-full h-full md:w-1/2">
        <Image
          src="/backgrounds/hero-bg.png"
          alt="Imagem de fundo justice-background"
          layout="fill"
          className="object-cover md:object-contain object-right"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative inset-0 bg-black bg-opacity-20 flex flex-row justify-center items-start text-left max-w-xl gap-12">
        <button
          className="mb-6 px-6 py-2 border border-yellow-500 text-white hover:bg-yellow-500 hover:text-black rounded transition-all"
          onClick={() =>
            document
              .getElementById("quem-somos")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Sobre o Escritório
        </button>
        <button
          className="px-6 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black rounded transition-all"
          onClick={() => window.open("https://wa.me/+559282301415", "_blank")}
        >
          Entre em Contato
        </button>
      </div>
    </header>
  );
};

export default HeroSection;
