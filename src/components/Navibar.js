import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import logo from "../img/video-player.png";

const Navibar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navibar;
