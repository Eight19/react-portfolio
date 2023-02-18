import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function App() {
  return (
        <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">PORTFOLIO</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#Projects">Projects coming soon!</Nav.Link>
              {/* <Nav.Link href="#Credentials">Coming soon!</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>

        <Carousel>
      <Carousel.Item>
        <h1>TIFFANY JONES</h1>
      <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUK5Tuhqge4_-DgVFW7mNZgYDknKIkvW6yQ&usqp=CAU?text=Firstslide&bg=373940"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9vD_Ybt4kk7hci74_tHdlc7AvQXApLmxwg&usqp=CAU?text=Secondslide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>smile.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHk9DnkA9IxziI_nw9jWPNcE7ovJAVNJMQ8Q&usqp=CAU?text=Thirdslide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Smile.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Card>
      <Card.Header>ABOUT ME</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        I am a solution-focused professional with the ability to apply business requirements and functional specifications to configure, design, and develop innovative applications using advanced technologies. I enjoy implementing and maintaining business and enterprise software solutions to ensure successful deployment of released applications.
        </Card.Text>
          </Card.Body>
    </Card>
    <Card>
      <Card.Header>CONTACT ME</Card.Header>
      <Card.Body>
        <Card.Title>All projects can be viewed at https://github.com/Eight19</Card.Title>
        <Card.Text>
          You can  also reach me via email at https://www.eight19realty@gmail.com</Card.Text>
      </Card.Body>
    </Card>
        </div>
  );
}

export default App;
