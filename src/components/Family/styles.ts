import styled from "styled-components";

export const Section = styled.section({
  flexDirection: "column",
  gap: 50,
});

export const Title = styled.h2({
  fontWeight: 500,
  textAlign: "center",
});

export const Cards = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  maxWidth: 950,
});
