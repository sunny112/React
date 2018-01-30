import React, { Component } from 'react';
import Column from './Components/Columns';
import { Container, Row, Col} from 'reactstrap';

class App extends Component {

  render() {
    return (
        <Container>
            <Row>

                <Col><Column /></Col>
                <Col><Column/></Col>
                <Col><Column/></Col>
                <Col><Column /></Col>

            </Row>

        </Container>

    );
  }
}

export default App;
