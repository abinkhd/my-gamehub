import meh from "../assets/meh.webp";
import bullseye from "../assets/bulls-eye.webp";
import thumbsup from "../assets/thumbs-up.webp";
import { Image, ImageProps, Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    0: { src: "N/A" },
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "thumbsup", boxSize: "25px" },
    5: { src: bullseye, alt: "bullseye", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} />;
};
export default Emoji;
