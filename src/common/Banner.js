import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";
import styled from "styled-components";

// styled-components를 사용하여 스타일 정의
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Page = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 800;
  font-size: 25em;
  will-change: transform, opacity;
  text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
  -webkit-user-select: none;
  user-select: none;
  background="lightpink"
`;

const pages = [
  ({ style }) => <Page style={{ ...style, background: "lightpink" }}>가</Page>,
  ({ style }) => <Page style={{ ...style, background: "lightblue" }}>B</Page>,
  ({ style }) => <Page style={{ ...style, background: "lightgreen" }}>C</Page>,
];

export default function Banner() {
  const [index, set] = useState(0);
  const onClick = () => set((state) => (state + 1) % 3);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <Container onClick={onClick}>
      {transitions((style, i) => {
        const PageComponent = pages[i];
        return <PageComponent style={style} />;
      })}
    </Container>
  );
}
