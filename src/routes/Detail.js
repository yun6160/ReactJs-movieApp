import { useParams } from "react-router-dom"; //url에서 파라미터 받는법
import { useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  //최초 실행시 id값으로 정보를 가져온다.
  useEffect(() => {
    getMovie();
  }, []);
  //받아온 영화 저장
  const [movie, setMovie] = useState([]);
  console.log(movie);

  return (
    <Container>
      {loading ? (
        <h2>sorry...Loading...</h2>
      ) : (
        <Row>
          <Col xs={6} md={4}>
            <Image src={movie.medium_cover_image} alt={movie.title} rounded />
          </Col>
          <h2>{movie.title}</h2>
          <h5>{movie.description_intro}</h5>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </Row>
      )}
    </Container>
  );
};

export default Detail;
