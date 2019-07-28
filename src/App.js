import React, { useState } from 'react';

import { useSpring, animated } from 'react-spring';
import styled from 'styled-components/macro';

function App() {
  const [down, setDown] = useState();
  const move = useSpring({
    top: 16,
    from: { top: 0 },
    config: { duration: 3000 },
    reset: true,
    reverse: !down,
  });

  return (
    <>
      <MyLabel
        style={down === void 0 ? void 0 : move}
        onClick={() => setDown(!down)}
      >
        I will move
      </MyLabel>
      <span> base</span>
    </>
  );
}

const MyLabel = styled(animated.span)`
  position: relative;
  outline: 1px solid red;
`;

export default App;
