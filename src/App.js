import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { useSpring, animated } from 'react-spring';
import styled from 'styled-components/macro';

function App() {
  const [props, setProps] = useState();
  const [down, setDown] = useState(false);
  const move = useSpring({
    top: 16,
    from: { top: 0 },
    config: { duration: 10000 },
  });
  const moveUp = useSpring({
    top: 0,
    from: { top: 16 },
    config: { duration: 10000 },
  });

  useEffect(() => {
    down ? setProps(move) : setProps(moveUp);
  }, [down]);

  return (
    <>
      <MyLabel style={props} onClick={() => setDown(!down)}>
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
