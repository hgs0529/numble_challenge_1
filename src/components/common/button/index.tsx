/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TShape =
  | "default"
  | "circle"
  | "rounded"
  | "icon"
  | "reverse"
  | "transparent";
type TType = "button" | "submit" | "reset";
type TColor = "default" | "primary";
type TSize = "small" | "default" | "large" | "extraSmall";

interface Props<T extends ElementType = "button"> {
  as?: T;
  children: ReactNode;
  shape?: TShape;
  type?: TType;
  color?: TColor;
  size?: TSize;
  bold?: boolean;
  width?: number;
}

const Button = <T extends ElementType = "button">({
  as,
  children,
  type,
  shape = "default",
  color = "default",
  size = "default",
  bold,
  width,
  ...props
}: Props<T> & ComponentPropsWithoutRef<T>) => {
  const Component = as || "button";

  const styles = css`
    display: flex;
    gap: 2px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.3);
    width: ${width ? width + "px" : "100%"};
    ${bold && "font-weight: bold;"}
    ${getShape(shape)}
    ${getSize(size)}
    ${getColor(color, shape)}
  `;

  return (
    <Component {...props} css={styles} shape={shape} color={color}>
      {children}
    </Component>
  );
};

const getShape = (shape: TShape) => {
  switch (shape) {
    case "circle":
      return css`
        border-radius: 50%;
        width: 40px;
        height: 40px;
      `;
    case "rounded":
      return css`
        border-radius: 20px;
      `;
    case "icon":
      return css`
        border-radius: 50%;
        width: 14px !important;
        height: 14px !important;
      `;
    case "transparent":
      return css`
        background-color: transparent;
        border: none;
      `;
    default:
      return;
  }
};

const getSize = (size: TSize) => {
  switch (size) {
    case "small":
      return css`
        height: 38px;
        font-size: 14px;
      `;
    case "large":
      return css`
        height: 48px;
        font-size: 18px;
      `;
    case "extraSmall":
      return css`
        height: 20px;
        font-size: 12px;
      `;
    default:
      return css`
        height: 42px;
        font-size: 16px;
      `;
  }
};

const getColor = (color: TColor, shape: TShape) => {
  switch (color) {
    case "primary":
      return shape === "reverse"
        ? css`
            background-color: #fff;
            color: #346aff;
            border: 1px solid #346aff;
          `
        : shape === "transparent"
        ? css`
            background-color: transparent;
            color: #346aff;
            border: none;
          `
        : css`
            background-color: #346aff;
            color: #fff;
          `;
    default:
      return css`
        background-color: #fff;
      `;
  }
};

export default Button;
