import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const Movie = ({ id, coverImage, title, summary, genres }) => {
  return (
    <Row>
      <Col xs={6} md={4}>
        <Image src={coverImage} alt={title} rounded />
      </Col>
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <h5>{summary}</h5>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </Row>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
