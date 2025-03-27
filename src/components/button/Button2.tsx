"use client";
import styled from "styled-components";
// npm install styled-components

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

export default function Page() {
  return <Button>Click Me</Button>;
}
