export const getCoords = (x: number, y: number) => {
  const MIN = 0;
  const MAX = 310;

  let xCoord;
  let yCoord;

  switch (true) {
    case x <= MIN && y <= MIN:
      xCoord = 0;
      yCoord = 0;
      break;

    case x > MIN && x < MAX && y <= MIN:
      xCoord = x;
      yCoord = 0;
      break;

    case x >= MAX && y <= MIN:
      xCoord = MAX;
      yCoord = 0;
      break;

    case x <= MIN && y > MIN && y < MAX:
      xCoord = 0;
      yCoord = y;
      break;

    case x <= MIN && y >= MAX:
      xCoord = 0;
      yCoord = MAX;
      break;

    case x > MIN && x < MAX && y >= MAX:
      xCoord = x;
      yCoord = MAX;
      break;

    case x >= MAX && y >= MAX:
      xCoord = MAX;
      yCoord = MAX;
      break;

    case x >= MAX && y > MIN && y < MAX:
      xCoord = MAX;
      yCoord = y;
      break;

    default:
      xCoord = x;
      yCoord = y;
  }

  return { xCoord, yCoord };
};
