import React, { useState } from "react";

import Typography from "@shared/Typography";
import Paper from "@shared/Paper";

// ** import icons
import PlusIco from "@icons/round-plus";
import MinusIco from "@icons/round-minus";

const Counter = () => {
  const minValue = 10;
  const [count, setCount] = useState(minValue);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count > minValue ? count - 1 : minValue);

  return (
    <Paper className="flex items-center gap-x-1 max-w-fit rounded-lg p-[4px] border-2 dark:border-theme-dark-md bg-theme-lighter dark:bg-theme-darker">
      <Paper
        onClick={decrease}
        className={"p-2 max-w-fit rounded-md bg-theme-light-sm"}
        clickable
      >
        <MinusIco />
      </Paper>
      <Typography variant="P_Regular_H6" disableSelect>
        {count}
      </Typography>
      <Paper
        onClick={increase}
        className={"p-2 max-w-fit rounded-md bg-theme-light-sm"}
        clickable
      >
        <PlusIco />
      </Paper>
    </Paper>
  );
};

export default Counter;
