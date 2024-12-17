import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
  id: number;
  name: String;
  background_image : string;
  parent_platforms: {platform : Platform}[];
  metacritic:number;
}


const useGames = (selctedGenre : Genre| null, selectedPlatform : Platform| null)=> 
  useData<Game>('/games',{
    params :{
      genres : selctedGenre?.id, 
      platforms : selectedPlatform?.id
    }},
    [
      selctedGenre?.id, 
      selectedPlatform?.id
    ]);



export default useGames;