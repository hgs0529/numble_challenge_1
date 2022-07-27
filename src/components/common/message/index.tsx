import { css } from "@emotion/react";
import Link from "next/link";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface Props<T extends ElementType = "span"> {
  as?: T;
  children: ReactNode;
  size?: "sm" | "lg";
  bold?: boolean;
  href?: string;
}

const Message = <T extends ElementType = "span">({
  children,
  as,
  size = "sm",
  bold,
  href,
}: Props<T> & ComponentPropsWithoutRef<T>) => {
  const Component = as || "span";

  const rootStyles = css`
    font-size: 12px;
    margin-left: 5px;
  `;

  const LinkStyles = css`
    ${rootStyles}
    color: #346aff;
    cursor: pointer;
  `;

  const spanStyles = css`
    ${rootStyles}
    color: rgba(0, 0, 0, 0.5);
  `;

  return as === "a" && href ? (
    <Link href={href} passHref>
      <Component css={LinkStyles}>{children}</Component>
    </Link>
  ) : (
    <Component css={spanStyles}>{children}</Component>
  );
};

export default Message;
