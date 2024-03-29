import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${number}${prev === '0' ? '' : prev}`);
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
  };
  return (
    <Container className="p-2">
      <h1 className="header">Calculadora React-Bootstrap</h1>
      <Container className="rounded border" style={{ width: "16rem" }}>
        <Form.Control className="m-2 text-end" value={currentNumber} />
        <Container fluid>
      <Row className="flex-nowrap align-items-center">
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={handleOnClear}>Clear</Button></Col>
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('%')}>%</Button></Col>
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('/')}>/</Button></Col>
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('*')}>*</Button></Col>
      </Row>
      <Row className="flex-nowrap align-items-center">
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('7')}>7</Button></Col>
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('8')}>8</Button></Col>
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('9')}>9</Button></Col>
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('-')}>-</Button></Col>
      </Row>
      <Row className="flex-nowrap align-items-center">
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('4')}>4</Button></Col>
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('5')}>5</Button></Col>
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('6')}>6</Button></Col>
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('+')}>+</Button></Col>
      </Row>
      <Row className="flex-nowrap align-items-center">
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('1')}>1</Button></Col>
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('2')}>2</Button></Col>
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('3')}>3</Button></Col>
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('0')}>=</Button></Col>
      </Row>
      <Row className="flex-nowrap align-items-center">
        <Col md="auto" className="p-0 m-1"><Button variant="secondary" onClick={() => handleAddNumber('0')}>0</Button></Col>            
      </Row>
    </Container>
      </Container>
    </Container>
  );
};

export default App;
