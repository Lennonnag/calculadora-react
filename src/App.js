import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import React, { useState } from "react";

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
      <Container className="rounded border" style={{ width: "20rem" }}>
        <Form.Control className="m-2 text-end" value={currentNumber} />
        <Stack direction="horizontal" gap={2}>
          <Button
            className="mt-2 ms-auto"
            variant="primary"
            style={{ width: "auto" }}
            onClick={handleOnClear}
          >
            Clear
          </Button>
          <Button className="mt-2" variant="primary">
            Del
          </Button>
          <Button className="mt-2" variant="primary">
            /
          </Button>
          <Button className="mt-2" variant="primary">
            *
          </Button>
        </Stack>
        <Stack direction="horizontal" gap={2}>
          <Button
            className="mt-2 ms-auto"
            variant="primary"
            onClick={() => handleAddNumber("7")}
          >
            7
          </Button>
          <Button
            className="mt-2"
            variant="primary"
            onClick={() => handleAddNumber("8")}
          >
            8
          </Button>
          <Button
            className="mt-2"
            variant="primary"
            onClick={() => handleAddNumber("9")}
          >
            9
          </Button>
          <Button className="mt-2" variant="primary">
            -
          </Button>
        </Stack>
        <Stack direction="horizontal" gap={2}>
          <Button
            className="mt-2 ms-auto"
            variant="primary"
            onClick={() => handleAddNumber("4")}
          >
            4
          </Button>
          <Button
            className="mt-2"
            variant="primary"
            onClick={() => handleAddNumber("5")}
          >
            5
          </Button>
          <Button
            className="mt-2"
            variant="primary"
            onClick={() => handleAddNumber("6")}
          >
            6
          </Button>
          <Button className="mt-2" variant="primary">
            +
          </Button>
        </Stack>
        <Stack direction="horizontal" gap={2}>
          <Button
            className="mt-2 ms-auto"
            variant="primary"
            onClick={() => handleAddNumber("1")}
          >
            1
          </Button>
          <Button
            className="mt-2"
            variant="primary"
            onClick={() => handleAddNumber("2")}
          >
            2
          </Button>
          <Button
            className="mt-2"
            variant="primary"
            onClick={() => handleAddNumber("3")}
          >
            3
          </Button>
          <Button className="mt-2" variant="primary">
            =
          </Button>
        </Stack>

        <Stack direction="horizontal" gap={2}>
          <Button
            className="mt-2 ms-auto"
            variant="primary"
            onClick={() => handleAddNumber("0")}
          >
            0
          </Button>
        </Stack>
      </Container>
    </Container>
  );
};

export default App;
