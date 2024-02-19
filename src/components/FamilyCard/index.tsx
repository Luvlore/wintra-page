import {
  Container,
  Description,
  Image,
  ImageOverlay,
  Name,
  RoyalTitle,
} from "./styles";

export function FamilyCard() {
  return (
    <Container
      tiltEnable={false}
      glareEnable={true}
      glareMaxOpacity={0.35}
      glarePosition="bottom"
      glareColor="rgba(13,141,184)"
    >
      <Image />
      <ImageOverlay />
      <Description>
        <Name>Leonard Wintra</Name>
        <RoyalTitle>Príncipe herdeiro de Schneeland</RoyalTitle>
      </Description>
    </Container>
  );
}
