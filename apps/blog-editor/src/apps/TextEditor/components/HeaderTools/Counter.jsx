import React, { useState } from "react";
import { Card, CardBody, Button, ButtonGroup } from "@nextui-org/react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <>
      <ButtonGroup>
        <Button color="primary" onClick={decrease}>
          -
        </Button>
        <Button color="primary" onClick={decrease}>
          {count}
        </Button>

        <Button color="primary" onClick={increase}>
          +
        </Button>
      </ButtonGroup>
      <Card>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
    </>
  );
}

export default Counter;
