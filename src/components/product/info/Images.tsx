import styled from "@emotion/styled";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { TImage } from "../../../../pages/api/products/[productId]/vendoritems/[vendoritemId]";
import { getCoords } from "../../../lib/util";

interface Props {
  images?: TImage[];
}

const Images = ({ images }: Props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [positionTop, setPositionTop] = useState(0);
  const [positionLeft, setPositionLeft] = useState(0);
  const [lensActive, setLensActive] = useState(false);
  const [windowPosition, setWindowPosition] = useState("");

  const zoomLensRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (zoomLensRef.current) {
      const LENS_WIDTH = 100;
      const LENS_HEIGHT = 100;
      const { clientX, clientY } = e;
      const { left, top } = e.currentTarget.getBoundingClientRect();
      const { x: lensLeft, y: lensTop } =
        zoomLensRef.current.getBoundingClientRect();
      setLensActive(true);

      const { xCoord, yCoord } = getCoords(
        clientX - left - LENS_WIDTH / 2,
        clientY - top - LENS_HEIGHT / 2
      );

      setPositionLeft(xCoord);
      setPositionTop(yCoord);
      setWindowPosition(
        `${((lensLeft - left) * 100) / 310}% ${((lensTop - top) * 100) / 310}%`
      );
    }
  };
  const handleMouseLeave = () => {
    setLensActive(false);
  };

  return (
    <ImageContainer>
      {images && (
        <>
          <ImageList>
            {images?.map((image, index) => (
              <ImageItem
                onMouseOver={() => setSelectedImageIndex(index)}
                active={index === selectedImageIndex}
                key={index}
              >
                <Image
                  alt="쿠팡"
                  src={`http:${image.thumbnailImage}`}
                  width={50}
                  height={50}
                />
              </ImageItem>
            ))}
          </ImageList>
          <ZoomContainer
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              alt="쿠팡"
              src={`http:${images[selectedImageIndex].detailImage}`}
              width={410}
              height={410}
            />
            <ZoomLens
              ref={zoomLensRef}
              top={positionTop}
              left={positionLeft}
              active={lensActive}
            />
            <ZoomWindow
              source={`http:${images[selectedImageIndex].detailImage}`}
              position={windowPosition}
              active={lensActive}
            />
          </ZoomContainer>
        </>
      )}
    </ImageContainer>
  );
};

const ZoomWindow = styled.div<{
  source: string;
  position: string;
  active: boolean;
}>`
  z-index: 1;
  position: absolute;
  left: 100%;
  top: 0;
  width: 410px;
  height: 410px;
  background-image: url(${(props) => props.source});
  background-size: 400%;
  background-position: ${(props) => props.position};
  display: ${(props) => (props.active ? "block" : "none")};
`;

const ImageContainer = styled.div`
  display: flex;
`;

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  max-height: 475px;
`;

const ImageItem = styled.div<{ active?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: ${(props) =>
    props.active ? "2px solid #346aff" : "2px solid transparent"};
`;

const ZoomContainer = styled.div`
  width: 100%;
  position: relative;
  max-height: 410px;
`;

const ZoomLens = styled.div<{ active?: boolean; left: number; top: number }>`
  position: absolute;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 100px;
  height: 100px;
  display: ${(props) => (props.active ? "block" : "none")};
`;

export default Images;