import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import styled, { css } from "styled-components";
import Featured from "./components/Featured";
import Services from "./components/Services";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Introshape = styled.div`
  ${Shape}
  clip-path: polygon(75% 0, 100% 0%, 100% 100%, 42% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 42% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 80% 100%);
  background-color: crimson;
`;

function App() { 

  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
      <Navbar />
      <Intro />
      <Introshape />
    </Container>
    <Container>
      <Featured />
      <FeatureShape />
    </Container>
    <Container>
      <Services />
      {!smallScreen && <ServiceShape />}
    </Container>
    <Container>
      <Price />
      <PriceShape />
    </Container>
    <Container>
      <Contact />
    </Container>
    <Container>
      <Footer />
    </Container>
    </>
  );
}

export default App;
