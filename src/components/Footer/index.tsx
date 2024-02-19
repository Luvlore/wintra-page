import { Container, Overlay, TextContainer } from "./styles";
import FooterImage from "../../assets/footer-image.png";

export function Footer() {
  return (
    <Container image={FooterImage}>
      <Overlay />

      <div
        style={{
          background: "radial-gradient(circle, transparent 50%, #242424 95%)",
          height: "100%",
          position: "absolute",
          bottom: 0,
          width: "100%",
          zIndex: 2,
        }}
      />

      <div
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #242424 75%)",
          height: "20vh",
          position: "absolute",
          bottom: 0,
          width: "100%",
          zIndex: 2,
        }}
      />

      <TextContainer>
        <p>&copy; 2024 - {new Date().getFullYear()} Afallrea</p>
      </TextContainer>
    </Container>
  );
}
