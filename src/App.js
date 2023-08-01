import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './App.css';


import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'


function App() {
  
  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']


  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

          <Container>
        <Nav defaultActiveKey="/" variant="tabs" fill>
          <Nav.Item>
            <Nav.Link href="/">
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={"aboutPage"}>
            <Link to="/about">About Us</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={"packagesPage"}>
            <Link to="/packages">Our Packages</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
</header>

<Container>
    <Card border="info" >
        <Card.Header className="blockquote mb-0 card-body">About Us</Card.Header>
        <Card.Body>
            <Card.Text>
                When returning from a spritual journey through the Earth, ....
            </Card.Text>
            <Card.Text>
                As the heir of the industrious McMansions fortune, Monty ....
            </Card.Text>
            <Card.Text>
                Monty decided to travel around the ...
            </Card.Text>
            <Card.Text>
                Upon his return, he dedicated about 1% ...
            </Card.Text>
        </Card.Body>
        <Card.Img style={{ width: '50%', margin: '0 auto'}}  variant="bottom" src="hotsprings.jpg" />
    </Card>
</Container>


        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/packages" render={() => <Packages packages={packages}/>}  />
        </div>

      </Router>

    </div>
  );
}

export default App;





