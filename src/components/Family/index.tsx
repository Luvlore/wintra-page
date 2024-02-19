import { FamilyCard } from "../FamilyCard";
import { Cards, Section, Title } from "./styles";

export function Family() {
  return (
    <Section id="family">
      <Title>Família</Title>

      <Cards>
        <FamilyCard />
        <FamilyCard />
        <FamilyCard />
        <FamilyCard />
      </Cards>
    </Section>
  );
}
