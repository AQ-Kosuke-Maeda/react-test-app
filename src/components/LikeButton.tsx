import { useState } from "react";
import { Button } from "@mui/material";
import styled from 'styled-components';

export const LikeButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <SContainer>
      <Button variant="contained" color="error" onClick={handleClick}>
        ♥ {count}
      </Button>
    </SContainer>
  );
}

const SContainer = styled.div`
  height: 50px;
`;