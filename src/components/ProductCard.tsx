"use client";

import iphone from "@/assets/iphone.webp";
import samsung from "@/assets/unnamed.webp";
import xiaomi from "@/assets/xiaomi.webp";
import { css, cx } from "@linaria/core";
import { styled } from "@linaria/react";
import Image from "next/image";
import { Product } from "@/types";
// import { useCartContext } from "@/context/CartContext";

export default function ProductCart() {
  const products: Product[] = [
    {
      id: "1",
      name: "iphone",
      price: 1000,
      img: iphone,
      qty: 1,
    },
    {
      id: "2",
      name: "xiaomi",
      price: 500,
      img: xiaomi,
      qty: 1,
    },
    {
      id: "3",
      name: "samsung",
      price: 1000,
      img: samsung,
      qty: 1,
    },
  ];

  const imageCss = css`
    width: 124px;
    height: 124px;
    border-radius: 10px;
  `;

  const Card = styled.div`
    width: 228px;
    height: 120px;
    padding: 10px;
    display: flex;
    background-color: #e5e5e5;
    border-radius: 10px;
    margin: 10px;
  `;

  const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
  `;

  const Name = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #479622;
  `;

  const Price = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: #68d237;
  `;

  const Infor = styled.div`
    padding: 10px;
  `;

  const cssButton = css`
    height: 25px;
    width: 100px;
    font-size: 10px;
    font-weight: 0;
    border: none;
  `;

  const ButtonC = styled.button`
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    background-color: #68d237;

    &:active {
      background-color: #499e21;
    }
  `;

  // const { handleAddProduct } = useCartContext();

  return (
    <Container>
      {products.map((product: Product) => (
        <Card key={product.id}>
          <Image
            className={cx(imageCss)}
            src={product.img}
            alt={product.name}
          />
          <Infor>
            <Name>{product.name}</Name>
            <Price>{product.price}$</Price>
            <ButtonC
              // onClick={() => handleAddProduct(product)}
              className={cx(cssButton)}
            >
              Add to cart
            </ButtonC>
          </Infor>
        </Card>
      ))}
    </Container>
  );
}
