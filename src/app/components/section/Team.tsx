import React from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Anne Castro",
    oab: "OAB/AM-11421",
    description:
      "Advogada atuante nas áreas Cível, Trabalhista e Consumidor. 9 anos de experiência.",
    image: "/equipe/anne-castro.png",
    mission:
      "Buscar a melhor solução jurídica para cada caso concreto, de maneira transparente, célere e eficaz.",
    backgroundImg: "/backgrounds/background-letra-a-anne-castro.png",
    altImg: "anne-castro-background",
  },
  {
    name: "Juliana Rodrigues",
    oab: "OAB/AM-10547",
    description:
      "Advogada atuante nas áreas Trabalhista, Cível e Consumidor. 9 anos de experiência.",
    image: "/equipe/juliana-rodrigues.png",
    mission:
      "Oferecer um serviço jurídico de excelência, pautado pela ética, eficiência e transparência.",
    backgroundImg: "/backgrounds/background-letra-j-juliana-rodrigues.png",
    altImg: "juliana-rodrigues-background",
  },
];

const TeamSection = () => {
  return (
    <section id="equipe" className="relative py-16 px-10 bg-black">
      {/* Imagem de fundo */}
      <div className="absolute inset-y-0 left-0 w-1/3 h-full">
        <Image
          src="/backgrounds/background-equipe-juliana-rodrigues.png"
          alt="equipe-juliana-rodrigue"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h2 className="text-5xl font-bold text-center text-white mb-12">
        Equipe
        <span className="block w-12 h-1 bg-yellow-500 mx-auto mt-2"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="border border-yellow-500 p-8 rounded-lg bg-opacity-10 text-white relative"
          >
            <div
              // className="absolute inset-0 left-0 w-1/3 h-full"
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Imagem de background interno */}
              <Image
                src={member.backgroundImg}
                alt={member.altImg}
                layout="fill"
                objectFit="contain"
                className="object-center"
              />
            </div>

            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-yellow-500"
              />
            </div>
            <div className="mt-10 text-center">
              <h3 className="text-2xl font-bold">{member.name}</h3>
              <p className="bg-gray-800 px-4 py-1 rounded-lg text-sm mt-2 inline-block">
                {member.oab}
              </p>
            </div>
            <div className="mt-6 text-left text-lg">
              <p className="font-semibold text-yellow-400 flex items-center">
                <span className="mr-2">➤</span> Advogada Atuante
              </p>
              <p className="mt-2">{member.description}</p>
              <p className="font-semibold text-yellow-400 flex items-center mt-4">
                <span className="mr-2">➤</span> 9 anos de experiência
              </p>
              <p className="mt-2">Pós-graduada em direito processual civil.</p>
              <p className="font-semibold text-yellow-400 flex items-center mt-4">
                <span className="mr-2">➤</span> Missão
              </p>
              <p className="mt-2">{member.mission}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
