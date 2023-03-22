import { ReactNode } from "react";
import styled from "styled-components";

const Btn = styled.button`
  color: white;
  background: blue;
`;

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

export default Button;
