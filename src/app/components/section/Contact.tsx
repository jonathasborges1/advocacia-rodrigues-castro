const ContactSection = () => {
  return (
    <section id="contato" className="py-16 px-10">
      <h2 className="text-5xl font-bold text-center mb-10">
        Contato
        <span className="block w-12 h-1 bg-yellow-500 mx-auto mt-2"></span>
      </h2>

      <p className="text-gray-400 text-center max-w-2xl mx-auto">
        Entre em contato via <span className="text-green-500">WhatsApp</span>{" "}
        pelos números abaixo:
      </p>
      <div className="text-center mt-6">
        <p className="text-lg">📞 +55 92 8230-1415</p>
        <p className="text-lg">📞 +55 92 8264-1364</p>
      </div>
    </section>
  );
};

export default ContactSection;
