import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import Tecnologias from "../../Components/Tecnologias/Tecnologias";
import ProjectList from "../../Components/ProjetosList/Projetolist";
import Email from "../../Components/Email/Email";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Front-end", "Back-end", "Full-stack!"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="container-main text-left flex flex-col gap-20 mb-24">
      <svg
        className="top-right -z-50"
        width="219"
        height="147"
        viewBox="0 0 219 147"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.18"
          x="10.4252"
          y="75.8326"
          width="7.50168"
          height="7.50168"
          transform="rotate(110.283 10.4252 75.8326)"
          fill="#686868"
          stroke="white"
          strokeWidth="1.22683"
        />
        <rect
          opacity="0.18"
          x="180.869"
          y="138.825"
          width="7.50168"
          height="7.50168"
          transform="rotate(110.283 180.869 138.825)"
          fill="#686868"
          stroke="white"
          strokeWidth="1.22683"
        />
        <rect
          x="69.4713"
          y="-91.84"
          width="180.485"
          height="180.485"
          transform="rotate(20.2832 69.4713 -91.84)"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="1.22683"
        />
      </svg>
      <svg
        className="bottom-left -z-50"
        width="232"
        height="191"
        viewBox="0 0 232 191"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50.5685"
          cy="172.432"
          r="112.068"
          stroke="white"
          strokeOpacity="0.09"
        />
        <g opacity="0.1">
          <path d="M26.4932 5.20547L228.856 172.432" stroke="#D9D9D9" />
          <rect
            x="22.4384"
            y="0.5"
            width="6.15753"
            height="6.15753"
            fill="#686868"
            stroke="white"
          />
          <rect
            x="224.801"
            y="169.027"
            width="6.15753"
            height="6.15753"
            fill="#686868"
            stroke="white"
          />
          <circle
            cx="121.819"
            cy="83.613"
            r="1.7774"
            fill="#323232"
            stroke="white"
          />
        </g>
      </svg>

      <div className="title w-full">
        <div className="flex flex-col gap-4">
          <span>Olá, o meu nome é</span>
          <h1 className="titulo">
            Luiz Henrique <br />
            Desenvolvedor{" "}
            <span>
              {text}
              <Cursor />
            </span>
          </h1>
          <p className="p-titulo">
            Eu sou um desenvolvedor Fullstack (com foco em Front-end)
            especializada na construção e design de experiências digitais.
          </p>
          <div className="flex gap-4">
              <a
              href="\CurriculoLuizHenrique.pdf"
              target="_blank"
                className="button first"
              >
                <button>Currículo</button>
                <span className="luz"></span>
              </a>

            <Link to="/Email" className="button sec">
              <button>Email</button>
              <span className="luz"> </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="projetos w-full">
        <h1 className="subtitulo mb-4 ">projects</h1>

        <ProjectList />
      </div>

      <div className="stack flex flex-col gap-5 rounded-lg border border-primaryHi w-full p-8">
        <Tecnologias />
      </div>

      <div className="w-full ">
        <h1 className="mb-5 subtitulo">Fale comigo</h1>
        <Email />
      </div>
    </div>
  );
}
