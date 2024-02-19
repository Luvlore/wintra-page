import styled from "styled-components";

export const Hero = styled.header<{ image?: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110vh;

  background-size: cover;
  background-image: url(${({ image }) => image});
  background-position: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  z-index: 1;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  gap: 14px;

  z-index: 2;
`;

export const Title = styled.h1`
  letter-spacing: -0.25px;

  font-family: "Abril Fatface", serif;
  font-size: 64px;
  font-weight: 400;

  line-height: 56px;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  letter-spacing: 1px;

  line-height: 24px;
  font-weight: 400;
`;

export const Button = styled.a`
  background-color: transparent;
  color: white;

  letter-spacing: 1px;
  font-size: 12px;

  border-radius: 100px;

  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: 0.1s;
  text-transform: uppercase;

  padding: 10px 20px;
  position: relative;

  transition: letter-spacing 0.6s ease;

  &:hover {
    color: white;
    text-decoration: none;

    letter-spacing: 3px;
    font-weight: 500;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: calc(100% - 30px);
    height: 1px;
    bottom: 10px;
    left: 15px;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;
