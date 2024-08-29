import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import Tecnologias from "../../Components/Tecnologias/Tecnologias";
import ProjectList from "../../Components/ProjetosList/Projetolist";
import Email from "../../Components/Email/Email";
import ScrollReveal from "scrollreveal";
import LuizHenriqueImage from "../../assets/imagens/luizhenrique.png";
import docker from "../../assets/imagens/docker.png";
import figma from "../../assets/imagens/figma.png";
import js from "../../assets/imagens/js.png";
import nodejs from "../../assets/imagens/nodejs.png";
import php from "../../assets/imagens/php.png";
import servidor from "../../assets/imagens/servidor-sql.png";
import laravel from "../../assets/imagens/laravel.png";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Front-end", "Back-end", "Full-stack!"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  useEffect(() => {
    // Inicialize o ScrollReveal e defina a configuração
    ScrollReveal().reveal(".headline", {
      duration: 900,
      distance: "50px",
      easing: "ease-in-out",
      origin: "left",
    });
    ScrollReveal().reveal(".headlineR", {
      duration: 900,
      distance: "30px",
      easing: "ease-in-out",
      origin: "right",
    });
  }, []);

  return (
    <div className="mt-10 container-main text-left flex flex-col gap-20 mb-24">
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

      <div className="mb-[-200px] title w-full flex home_descricao">
        <div className="flex flex-col gap-4 headline">
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
              href=" \portfolio-v3\assets\CurriculoLuizHenrique.pdf"
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
        <div className="relative img_profile_container headlineR">
          <img src={LuizHenriqueImage} alt="Luiz Henrique" className="imagem-profile-home"/>
          <div className="letras flex space-x-2">
            <div className="neon-text l" data-letter="L">L</div>
            <div className="neon-text h" data-letter="H">H</div>
          </div>
          <div className="img-icons">
              <img src={docker} alt="docker" />
              <img src={figma} alt="figma" />
              <img src={js} alt="js" />
              <img src={nodejs} alt="nodejs" />
              <img src={php} alt="php" />
              <img src={servidor} alt="servidor" />
              <img src={laravel} alt="servidor" />
          </div>
        </div>
      </div>

      <div className="projetos w-full headline">
        <h1 className="subtitulo mb-4 ">projects</h1>
        <ProjectList />
      </div>

      <div className="stack flex flex-col gap-5 rounded-lg border border-primaryHi w-full p-8 headline">
        <Tecnologias />
      </div>

      <div className="w-full headline">
        <h1 className="mb-5 subtitulo">Fale comigo</h1>
        <Email />
      </div>
    </div>
  );
}
