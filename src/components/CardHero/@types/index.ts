import { IThumbnail } from "../../../service/query/@types";

export interface ICardHeroes {
  id: number;
  name: string;
  description?: string;
  modified?: string;
  thumbnail?: IThumbnail;
}
