import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Direito Civil",
    description: [
      "Indenização por dano moral e material",
      "Contratos",
      "Ações de cobrança",
      "Locação de Imóveis",
      "Condomínios",
      "Mudança de nome e retificação de registro",
    ],
    icon: "/icons/direito-civil.png",
  },
  {
    title: "Direito do Trabalho",
    description: [
      "Verbas trabalhistas",
      "Vínculo empregatício",
      "Verbas rescisórias indevidas",
      "Desvio/acúmulo de funções",
      "Acidente de trabalho, e etc;",
    ],
    icon: "/icons/direito-trabalho.png",
  },
  {
    title: "Direito do Consumidor",
    description: [
      "Verbas trabalhistas",
      "Vínculo empregatício",
      "Verbas rescisórias indevidas",
      "Desvio/acúmulo de funções",
      "Acidente de trabalho, e etc;",
    ],
    icon: "/icons/direito-consumidor.png",
  },
];

const ServicesSection = () => {
  return (
    <section id="service" className="relative py-16 px-10 bg-black text-white">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/backgrounds/justice-background.png"
          alt="Imagem de fundo justice-background"
          layout="fill"
          objectFit="contain"
          className="object-right object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12">
          Atuação
          <span className="block w-12 h-1 bg-yellow-500 mx-auto mt-2"></span>
        </h2>
        <div className="border border-yellow-500 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-black bg-opacity-20 border border-gray-400 p-6 rounded-lg text-center"
              >
                {/* Ícone */}
                <div className="flex justify-center items-center mb-4 gap-2 md:gap-3">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                  />
                  <h3 className="text-xl font-semibold mb-2 whitespace-nowrap">
                    {service.title}
                  </h3>
                </div>

                <ul className="text-gray-300 text-left list-disc list-inside">
                  {service.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
