import { Link, useParams } from "react-router-dom";
import projectsData from "../../../data/Projetos/projetos.json";
import { FeaturedImageGallery } from "../../../ui/FeaturedImageGallery";
import { FaArrowLeftLong } from "react-icons/fa6";
import ChipColors from "../../../Components/Chips/ChipColors";

const ProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id);

  const project = projectsData.find((proj) => proj.id === projectId);

  if (!project) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <div className="flex flex-col items-start container-main mb-24">
      <Link to="/" className="flex gap-3 mb-3">
        <FaArrowLeftLong className="mt-1" />
        <h1>Ver todos</h1>
      </Link>
      <h2 className="text-2xl font-bold mb-5 ml-1">{project.title}</h2>
      <p className="text-gray-600 ml-1">{project.description}</p>

      <div className="ml-1 my-3">
        {project.technologies && (
          <ChipColors technologies={project.technologies} />
        )}
      </div>

      <div className="flex gap-4 mb-3">
        {project.links?.site && (
          <a
            href={project.links.site}
            target="_blank"
            rel="noopener noreferrer"
            className="button_padrao border border-primaryHi w-28 text-center rounded-lg py-1 "
          >
            Visitar Site
          </a>
        )}
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button_padrao border border-primaryHi w-28 text-center rounded-lg py-1"
          >
            Ver no GitHub
          </a>
        )}
      </div>
      <FeaturedImageGallery
        images={project.image.map((imgObj) => ({ imgelink: imgObj.img }))}
      />
    </div>
  );
};

export default ProjectDetails;
