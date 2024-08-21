// import { useCartContext } from "@/context/CartContext";
import { styled } from "@linaria/react";

export default function Payment() {
  const Container = styled.div`
    width: 800px;
    height: 300px;
    border-radius: 20px;
    border: none;
    padding: 10px;
    margin: 0 auto;
  `;

  const Row = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: end;
    align-items: center;
  `;

  const P = styled.p`
    font-size: 30px;
    font-weight: 500;
    margin-right: 10px;
  `;

  const Price = styled.p`
    font-size: 30px;
    font-weight: bold;
  `;

  // const { totalPrice } = useCartContext();

  return (
    <Container>
      <Row>
        <P>Total:</P>
        <Price>{}$</Price>
      </Row>
    </Container>
  );
}
