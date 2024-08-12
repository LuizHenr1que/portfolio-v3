import React from "react";
import PropTypes from "prop-types";

export function FeaturedImageGallery({ images }) {
  const [active, setActive] = React.useState(images[0].imgelink);

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="active gallery"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt={`gallery thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

FeaturedImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imgelink: PropTypes.string.isRequired
    })
  ).isRequired
};
