import image from "../../assets/logo.svg";
import { Container, Content } from "./styled";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={image} alt="logo" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
