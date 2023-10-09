import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">IniCoding</h3>
            <p className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              laboriosam cum, quo dolores repudiandae neque nam adipisci
              maiores. Rem, delectus.
              <div className="no mb-1 mt-4">
                <Link className="text-decoration-none">
                  <i className="fa-brands fa-whatsapp"></i>
                  <p className="m-0">+62 123-4567-8900</p>
                </Link>
              </div>
              <div className="email">
                <Link className="text-decoration-none">
                  <i className="fa-regular fa-envelope"></i>
                  <p className="m-0">iniCoding@gmail.com</p>
                </Link>
              </div>
            </p>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-4">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="/kelas">kelas</Link>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/syaratketentuan">Syarat dan Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk Info Menarik</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..." />
              <button className="btn btn-danger rounded">Subscribe</button>
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">marmdhn</span>, All right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
