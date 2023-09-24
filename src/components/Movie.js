import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";

const Movie = ({ id, coverImage, title, summary, genres }) => {
  const StyleDiv = {
    marginBottom: "20px",
  };
  return (
    <Row style={StyleDiv}>
      <Col xs={6} md={4}>
        <Image src={coverImage} alt={title} rounded />
      </Col>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Link to={`movie/${id}`}>{title}</Link>
          </Accordion.Header>
          <Accordion.Body>{summary}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Genre</Accordion.Header>
          <Accordion.Body>
            <ul>
              {genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
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
