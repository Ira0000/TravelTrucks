import { Campers } from "./CampersTypes";

export interface ApiResponseCampers {
  items: Campers[];
  total: number;
}

export interface ApiError {
  message: string;
}
