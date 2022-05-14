import React from "react";

// Import Boostrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import CreateStudent from "./components/create-student.component";

function App() {
  return (
    <div>
      <CreateStudent />
    </div>
  );
}

export default App;
