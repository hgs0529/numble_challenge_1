import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Message from "../message";

interface Props {
  average?: number;
  text?: string;
  size?: "sm" | "lg";
  hasLink?: boolean;
  href?: string;
}

const Rating = ({ average = 0, text, size = "sm", hasLink, href }: Props) => {
  return (
    <div>
      {new Array(5).fill(null).map((v, i) => (
        <FontAwesomeIcon
          size={size}
          color="#ffa500"
          key={i}
          icon={average && i < average ? faStar : regularStar}
        />
      ))}
      <Message as={hasLink ? "a" : "span"} href={href}>
        {text}
      </Message>
    </div>
  );
};

export default Rating;
