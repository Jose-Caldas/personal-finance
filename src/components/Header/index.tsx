import image from "../../assets/logo.svg";
import { Container, Content } from "./styled";

interface HeaderProps {
  onOpenNewTransactionModal: () => void; // não recebe nenhum parâmetro e não dá nenhum retorno
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={image} alt="logo" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
