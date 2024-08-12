import { Link } from "react-router-dom";
import projectsData from "../../data/Projetos/projetos.json";

const ProjectList = () => {
  return (
    <div className="flex flex-col">
      {projectsData.map((project) => (
        <div
          key={project.id}
          className="flex flex-col  md:flex-row  items-start gap-4 rounded-lg hover:hover transition duration-200 -ml-2 mb-2 card"
        >
          <div className="p-2">
            <img
              src={project.image[0].img}
              alt={project.title}
              className="w-80 rounded-lg md:w-52"
            />
          </div>
          <div className="flex flex-col pl-5 py-2 items-start w-full md:p-2">
            <h3 className="subtitulo">{project.title}</h3>
            <p className="text-gray-500 flex flex-col justify-between h-full">
              {project.description}
              <Link
                to={`/project/${project.id}`}
                className="button_padrao border border-primaryHi w-28 text-center rounded-lg py-1 mt-2"
              >
                Ver projeto
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
