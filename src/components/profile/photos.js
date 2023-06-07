import PropTypes from "prop-types";

export default function Photos({ photos }) {
  console.log(photos);
  return null;
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
};
