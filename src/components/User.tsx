"use client";

import { styled } from "@linaria/react";
import Image from "next/image";
import imgPerson from "@/assets/person.webp";
import { css, cx } from "@linaria/core";

type Props = {
  user: User;
};

export default function User({ user }: Props) {
  const Container = styled.div`
    width: 300px;
    margin: 0 auto;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
  `;

  const styleImage = css`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 10px;
  `;

  const Name = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  `;

  const P = styled.p`
    font-size: 16px;
    margin: 0;
  `;

  return (
    <Container>
      <Image className={cx(styleImage)} src={imgPerson} alt="person" />
      <div>
        <Name>{user.name}</Name>
        <P>{user.username}</P>
        <P>{user.email}</P>
      </div>
    </Container>
  );
}
