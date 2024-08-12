import * as IconsFa from "react-icons/fa";
import * as IconsSi from "react-icons/si";
import tecnologiasData from "../../data/tecnologias.json";
import "./Ferramentas.css"; // Arquivo CSS para estilos personalizados

const Ferramentas = () => {
  const { ferramentas } = tecnologiasData;

  return (
    <div className="ferramentas">
      <h1 className="subtitulo mb-4">Ferramentas</h1>
      <ul className="grid grid-cols-2 gap-1">
        {ferramentas.map((ferramenta, index) => {
          // Determinar o ícone e a biblioteca
          const isSiIcon = ferramenta.icon.startsWith("Si");
          const iconName = ferramenta.icon;
          const Icon = isSiIcon ? IconsSi[iconName] : IconsFa[iconName];
          
          let itemClass =
            "bg-secondary flex justify-start items-center gap-4 p-4 select-none";

          // Aplicar classes de borda aos itens desejados
          if (index === 0) {
            itemClass += " border-top-left";
          } else if (index === 1) {
            itemClass += " border-top-right";
          } else if (index === ferramentas.length - 1) {
            itemClass += " border-bottom-right";
          } else if (index === ferramentas.length - 2) {
            itemClass += " border-bottom-left";
          }

          return (
            <li key={index} className={itemClass}>
              {Icon && <Icon size={32} />}
              <div>
                <div>{ferramenta.subtitulo}</div>
                {ferramenta.descricao && <p className="descricao">{ferramenta.descricao}</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ferramentas;
