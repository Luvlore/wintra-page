import styled from "styled-components";

export const Section = styled.section({
  marginTop: "10vh",
  alignItems: "center",
});

export const Title = styled.h1({
  fontWeight: 500,
  textAlign: "center",
  fontSize: 28,
  maxWidth: 500,
  width: "80%",

  animation: "appear 1ms ease-in-out",
  animationRange: "cover 0% cover 30%",
  animationTimeline: "view()",
});

export const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  marginTop: 50,
  gap: 16,
  width: "80%",
  maxWidth: 790,
});

export const Paragaph = styled.p({
  letterSpacing: 0.75,
  textAlign: "justify",

  animation: "appear 1ms ease-in-out",
  animationRange: "cover 0% cover 30%",
  animationTimeline: "view()",
});
