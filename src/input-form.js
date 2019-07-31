import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import isRightWing from './sentiment-service'

function InputForm() {
    const [isTory, setTory] = useState(undefined);
    return (
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
    );
}

export default InputForm;
