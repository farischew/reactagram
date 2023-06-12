import PropTypes from "prop-types";

export default function Image({ src, caption }) {
  return (
    <div>
      <img src={src} alt={caption} className="w-full object-fill" />
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
