import formacaoData from '../../data/formacao.json'; // Ajuste o caminho conforme necessário
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const Formacao = () => {
  useEffect(() => {
    // Inicialize o ScrollReveal e defina a configuração
    ScrollReveal().reveal(".headline", {
      duration: 900,
      distance: "50px",
      easing: "ease-in-out",
      origin: "left",
    });
  }, []);
  return (
    <div className="container-main items-start flex gap-20 headline mb-20">
      <div className="flex flex-col gap-4">
        <h1 className="titulo">
          Invest <br /> in the <span className="text-primary">future</span>,
          <br />
          <span className="text-primary">study</span>.
        </h1>
      </div>

      <div className="flex flex-col gap-4 w-full ">
        {formacaoData.map((item, index) => (
          <div
            key={index}
            className="flex gap-6 items-center rounded-md overflow-hidden transition-all duration-300 p-4 border-l-2 border-secondary card"
          >
            <div className="relative flex items-center justify-center">
              {item.imagem.startsWith('/') ? (
                <img src={item.imagem} alt="" className="w-24 h-24 rounded-md object-cover" />
              ) : (
                <div className="w-24 h-24 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-4xl">
                  {item.imagem}
                </div>
              )}
            </div>
            <div className="rounded-md flex-1">
              <h3 className="text-lg font-semibold">{item.curso}</h3>
              <p className='text-gray-500 text-sm'>{item.periodo}</p>
              <p className="text-gray-600 dark:text-gray-300">{item.instituicao}</p>
              {item.descricao && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                  {item.descricao}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
