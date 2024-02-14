import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Portfolio from "./components/Portfolio";
import Counter from "./components/Counter";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/header.css";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row className="no-gutters">
          <Col md={2} lg={2} className="p-0" style={{ background: "#000000" }}>
            <Header />
          </Col>
          <Col md={10} lg={10} className="p-0">
            {/* Main Content */}
            {/* className="header-container" */}
            <Home />
            <About />
            <Skills />
            <WorkExperience />
            <Counter />
            <Portfolio />
            <Testimonials />
            <Contact />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
