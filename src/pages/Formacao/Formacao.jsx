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
    <div className="container-main items-start flex gap-20 headline">
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
            <div className="relative">
              <img src={item.imagem} alt="" className="w-24 h-w-24 rounded-md" />
            </div>
            <div className="rounded-md">
              <h3>{item.curso}</h3>
              <p className='text-gray-500'>{item.periodo}</p>
              <p>{item.instituicao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
