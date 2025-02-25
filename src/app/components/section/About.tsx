import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="quem-somos"
      className="relative py-20 px-10 bg-black flex justify-center"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-y-0 w-full h-full transform max-md:-translate-x-20 md:translate-x-0">
        <Image
          src="/backgrounds/justice-scale.png"
          alt="Balança da Justiça"
          layout="fill"
          className="object-left object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Título centralizado */}
        <h2 className="text-5xl font-bold text-white text-center mb-12">
          Quem Somos
          <span className="block w-12 h-1 bg-yellow-500 mx-auto mt-2"></span>
        </h2>

        {/* Bloco de texto alinhado um pouco à direita */}
        <div className="md:w-2/3 ml-auto bg-black bg-opacity-10 border border-yellow-500 p-6 rounded-lg text-white">
          <p className="text-lg leading-relaxed">
            O escritório{" "}
            <span className="text-green-400 font-semibold">
              Advocacia Rodrigues e Castro
            </span>{" "}
            é especializado em oferecer serviços jurídicos de alta qualidade
            para atender às necessidades dos nossos clientes. Com uma equipe
            experiente e comprometida, estamos preparados para atuar nas áreas{" "}
            <span className="text-yellow-400">Cível, Consumidor</span> e
            <span className="text-yellow-400"> Trabalhista</span>, sempre
            buscando a melhor solução para cada caso.
          </p>
        </div>

        {/* Bloco de texto maior abaixo, alinhado mais à direita */}
        <div className="md:w-3/4 ml-auto bg-black bg-opacity-10 border border-yellow-500 p-6 rounded-lg text-white mt-6">
          <p className="text-lg leading-relaxed">
            Estamos aqui para ajudá-lo em suas questões jurídicas e assegurar a
            <span className="text-blue-400 font-semibold">
              {" "}
              defesa de seus direitos.
            </span>{" "}
            Entre em contato conosco para agendar uma consulta e conhecer mais
            sobre os nossos serviços. O Escritório de Advocacia Rodrigues e
            Castro está pronto para cuidar dos seus interesses e oferecer todo o
            suporte necessário para que você se sinta seguro e amparado em sua
            jornada legal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
