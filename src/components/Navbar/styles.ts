import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: calc(100% - 2rem);
  height: 8vh;

  scroll-behavior: smooth;

  z-index: 99999;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 400px;
  list-style: none;
`;

export const Item = styled.li`
  border-radius: 16px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
`;

export const Link = styled.a`
  color: white;
  padding: 30px 20px;
  position: relative;

  &:hover {
    color: white;
    text-decoration: none;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: calc(100% - 30px);
    height: 1px;
    bottom: 24px;
    left: 15px;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export const ScrollIndicator = styled.div({
  position: "absolute",
  width: "100%",
  height: 2,
  backgroundColor: "white",
  bottom: 0,
  animation: "scroll linear both",
  animationTimeline: "scroll()",
  animationRange: "entry 105vh cover 100%",
});

export const Blur = styled.div({
  position: "absolute",
  background: "#242424",
  zIndex: -1,

  width: "100%",
  height: "100%",
  animation: "scroll 0s both",
  animationTimeline: "scroll()",
  animationRange: "entry 108vh cover 100%",
});
