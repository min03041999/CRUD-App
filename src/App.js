import React from "react";

// Import Boostrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import CreateStudent from "./components/create-student.component";
import StudentList from "./components/student-list.component";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"} className="nav-link">
                  React Mern Stack App
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                    CreateStudent
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <Route exact path="/" component={CreateStudent} />
              <Route path="/create-student" component={CreateStudent} />
              <Route path="/student-list" component={StudentList} />
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
