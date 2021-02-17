import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Songs from './components/Songs'
import { Container } from "react-bootstrap";
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Songs />
      </Container>
    </React.Fragment>

  );
}

export default App;
