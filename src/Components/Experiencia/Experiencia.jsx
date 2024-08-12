import experienciaData from "../../data/experiencia.json";

const Experiencia = () => {
  return (
    <div>
      <h1 className="subtitulo mb-4 ">Experiência</h1>
      <ul className="flex flex-col gap-6">
        {experienciaData.map((experiencia, index) => (
          <li key={index}>
            <p className="flex w-full max-w-fit mr-10 font-medium text-lg lg:text-xl text-zinc-400">
              {experiencia.periodo}
            </p>
            <h1 className="text-white text-2xl lg:text-3xl font-semibold mb-1">
              {experiencia.empresa}
            </h1>
            <h2 className="text-zinc-400 font-medium text-lg lg:text-xl">
              {experiencia.cargo}
            </h2>
            <p className="text-zinc-400 mt-4 text-lg lg:text-xl">
              {experiencia.descricao}
            </p>
            {index < experienciaData.length - 1 && (
              <hr className=" mt-6 border-gray-900" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experiencia;
