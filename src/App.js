import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const App = () => {
  return (
    <Container className="p-2">
      <h1 className="header">Calculadora React-Bootstrap</h1>
      <Container className="rounded border" style={{ width: "20rem" }}>
        <Form.Control className="m-2" />
        <Stack direction="horizontal" gap={2}>
          <Button className="mt-2 ms-auto" variant="primary" style={{ width: "auto" }}>
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
          <Button className="mt-2 ms-auto" variant="primary">
            7
          </Button>
          <Button className="mt-2" variant="primary">
            8
          </Button>
          <Button className="mt-2" variant="primary">
            9
          </Button>
          <Button className="mt-2" variant="primary">
            -
          </Button>
        </Stack>
        <Stack direction="horizontal" gap={2}>
          <Button className="mt-2 ms-auto" variant="primary">
            3
          </Button>
          <Button className="mt-2" variant="primary">
            4
          </Button>
          <Button className="mt-2" variant="primary">
            6
          </Button>
          <Button className="mt-2" variant="primary">
            +
          </Button>
        </Stack>
        <Stack direction="horizontal" gap={2}>
          <Button className="mt-2 ms-auto" variant="primary">
            1
          </Button>
          <Button className="mt-2" variant="primary">
            2
          </Button>
          <Button className="mt-2" variant="primary">
            3
          </Button>
          <Button className="mt-2" variant="primary">
            =
          </Button>
        </Stack>
      </Container>
    </Container>
  );
};

export default App;
