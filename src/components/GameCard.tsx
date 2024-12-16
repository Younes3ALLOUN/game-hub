import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
    game : Game;
}

const GameCard = ({game} : Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
        {/* when the image is bigger than its container when we fix the border radus we didn't get the top border */}
        <Image src ={game.background_image}/>
        <CardBody>
            <Heading fontSize="2xl"> {game.name} </Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard