import * as IconsFa from "react-icons/fa";
import * as IconsSi from "react-icons/si";
import { Link } from "react-router-dom";
import tecnologias from "../../data/tecnologias.json";

const StackComponent = () => {
  const { Ptecnologias } = tecnologias;

  return (
    <div>
      <div className="mb-10">
        <h1 className="subtitulo">Stack</h1>
        <p className="text-gray500">Lorem ipsum dolor sit amet</p>
      </div>
      <div className="flex flex-col gap-4 -ml-4">
        {Ptecnologias.map((tec, index) => {
          // Determinar o ícone e a biblioteca
          const isSiIcon = tec.icon.startsWith("Si");
          const iconName = tec.icon;
          const IconComponent = isSiIcon ? IconsSi[iconName] : IconsFa[iconName];

          return (
            <div
              key={index}
              className="flex flex-row items-center gap-5 rounded-lg hover:bg-hover transition duration-200 p-2 card"
            >
              {IconComponent && <IconComponent className="h-10 w-10" />}
              <div className="flex flex-col">
                <h3 className="subtitulo">{tec.subtitulo}</h3>
                <p className="text-gray500 flex flex-col justify-between h-full">
                  {tec.descricao}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <Link
        to="/sobre"
        className="button_padrao w-full border border-primaryHi rounded-lg flex justify-center mt-5 p-1"
      >
        Ver todos
      </Link>
    </div>
  );
};

export default StackComponent;
