"use client";

// import { useCartContext } from "@/context/CartContext";
import { css, cx } from "@linaria/core";
import { styled } from "@linaria/react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Header() {
  const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    background-color: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
    padding: 10px 20px;
    font-size: 30px;
    font-weight: bold;
    line-height: 100px;
    align-items: center;
    justify-content: space-around;
  `;
  const cssCart = css`
    margin-left: 10px;
  `;

  // const { quantityProduct } = useCartContext();

  return (
    <Container>
      <Image src={logo} alt="logo" width={100} height={100} />
      <p>
        <FaShoppingCart />
        <span className={cx(cssCart)}>{}</span>
      </p>
    </Container>
  );
}
