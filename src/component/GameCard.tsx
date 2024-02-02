import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="8px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="1xl">{game.name} </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;