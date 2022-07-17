import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";
import { StyledBtn } from "./styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  theme?: "default" | "reverse";
}

const Button = ({ children, type, to, theme = "default" }: IProps) => {
  const Btn = (
    <StyledBtn theme={theme} type={type}>
      {children}
    </StyledBtn>
  );

  return to ? <Link href={to}>{Btn}</Link> : Btn;
};

export default Button;
