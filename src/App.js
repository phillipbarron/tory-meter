import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import isRightWing from './sentiment-service'
import './App.css';

function App() {
  const [isTory, setTory] = useState(undefined);
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <header className="App-header">
        <Form>
          <Form.Group controlId="articleContent">
            <Form.Label>Article content</Form.Label>
            <Form.Control as="textarea" rows="3" />
            <Button variant="success" onClick={() => setTory(isRightWing())} >Detect Toriness</Button>
            {isTory !== undefined &&
              <div>
                {isTory ? "Tory" : "Normal" }
              </div>
            }
          </Form.Group>
        </Form>
      </header>
    </div>
  );
}

export default App;
