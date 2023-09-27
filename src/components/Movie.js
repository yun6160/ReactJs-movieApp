import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Accordion from "react-bootstrap/Accordion";

const Movie = ({ id, coverImage, title, summary, genres }) => {
  const StyleCol = {
    marginBottom: "20px",
  };
  const StyleImg = {
    marginBottom: "10px",
  };
  return (
    <Col xs={6} md={4} style={StyleCol}>
      <Image src={coverImage} alt={title} rounded style={StyleImg} />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Link to={`movie/${id}`}>{title}</Link>
          </Accordion.Header>
          <Accordion.Body>
            {summary.length > 235 ? `${summary.slice(0, 235)} ...` : summary}
            <hr />
            genre
            <ul>
              {genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
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
