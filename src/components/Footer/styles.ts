import styled from "styled-components";

export const Container = styled.footer<{ image?: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;

  background-size: cover;
  background-image: url(${({ image }) => image});
  background-position: top;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);

  z-index: 1;
`;

export const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 10px;

  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  z-index: 3;
`;
