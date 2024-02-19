import { Blur, Item, Link, List, Nav, ScrollIndicator } from "./styles";

export function Navbar() {
  return (
    <Nav>
      <List>
        <Item>
          <Link href="#header">Início</Link>
        </Item>

        <Item>
          <Link href="#kingdom">Reino</Link>
        </Item>

        <Item>
          <Link href="#family">Família</Link>
        </Item>
      </List>

      <Blur />
      <ScrollIndicator />
    </Nav>
  );
}
