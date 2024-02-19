import Tilt from "react-parallax-tilt";
import styled from "styled-components";

export const Container = styled(Tilt)({
  position: "relative",
  width: 340,
  height: 200,
  margin: 5,
  cursor: "pointer",
});

export const Description = styled.div({
  position: "absolute",
  width: "100%",
  height: "100%",
  bottom: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  textAlign: "center",
});

export const Name = styled.h3({
  fontSize: 24,
  fontWeight: 400,
  fontFamily: '"Abril Fatface", serif',
  letterSpacing: -0.25,
});

export const RoyalTitle = styled.h4({
  fontWeight: 400,
  fontSize: 14,
  // width: 200,
});

export const Image = styled.div({
  width: "100%",
  height: "100%",
  background:
    "url('https://i.pinimg.com/564x/5a/3c/9b/5a3c9bcf246eb350277fd22225dcbcee.jpg')",
  backgroundSize: "100%",
  backgroundPosition: "center top -80px",
  filter: "grayscale(100)",
});

export const ImageOverlay = styled.div({
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgb(0,0,0,0.3)",
});

export const ImageGradient = styled.div({
  position: "absolute",
  top: 0,
  background: "linear-gradient(315deg, rgba(13,141,184,1) 2%, transparent 45%)",
  width: "100%",
  height: "100%",
});
