"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Ícones do Heroicons

export const smoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  href: string
) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 80, // Ajuste para navbar fixa
      behavior: "smooth",
    });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 shadow-md z-20 py-4 px-6 flex justify-between items-center">
      {/* Logo no canto superior esquerdo */}
      <div className="top-8 left-8">
        <Image
          src="/logotipo.png"
          alt="Rodrigues e Castro Advocacia"
          width={150}
          height={40}
        />
      </div>

      {/* Botão Menu Hamburguer no Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Menu com borda arredondada */}
      <div
        ref={menuRef}
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex border border-yellow-500 rounded-lg px-6 py-2 absolute md:relative top-16 right-4 md:top-0 md:right-0 bg-black md:bg-transparent w-48 md:w-auto text-center md:text-left`}
      >
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-white">
          {[
            { name: "Início", href: "#hero" },
            { name: "Quem Somos", href: "#quem-somos" },
            { name: "Atuação", href: "#service" },
            { name: "Equipe", href: "#equipe" },
            { name: "Contato", href: "#contato" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                scroll={true}
                onClick={(e) => smoothScroll(e, item.href)}
                className="px-4 py-2 hover:text-yellow-500 cursor-pointer block"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
