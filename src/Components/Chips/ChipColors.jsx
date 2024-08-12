import PropTypes from "prop-types";
import { Chip } from "@material-tailwind/react";
import colorMap from "./colorMap";

export function ChipColors({ technologies }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {technologies.map((tech, index) => (
        <Chip key={index} color={colorMap[tech] || "gray"} value={tech} />
      ))}
    </div>
  );
}

ChipColors.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ChipColors;
