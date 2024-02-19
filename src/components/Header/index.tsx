import {
  Button,
  Hero,
  Overlay,
  Subtitle,
  TextContainer,
  Title,
} from "./styles";
import HeroImage from "../../assets/hero-image.png";

export function Header() {
  return (
    <Hero image={HeroImage} id="header">
      <Overlay />

      <TextContainer>
        <Title>Wintra's Family</Title>

        <Subtitle>Lorem ipsum dolor sit amet</Subtitle>

        <Button href="#kingdom">Explorar</Button>
      </TextContainer>
    </Hero>
  );
}
