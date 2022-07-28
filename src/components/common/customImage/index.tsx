import styled from "@emotion/styled";
import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {
  alt: string;
}

const CustomImage = ({ ...props }: Props) => {
  return (
    <Wrapper width={props.width}>
      <Image layout="fill" className="autoImage" {...props} alt={props.alt} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ width: number | undefined | string }>`
  width: ${({ width }) =>
    width ? (typeof width === "number" ? `${width}px` : width) : "100%"};
  & > span {
    position: unset !important;
    & .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }
`;

export default CustomImage;
