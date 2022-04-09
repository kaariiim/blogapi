import { Cathegorie } from "src/cathegories/cathegories.interface";
import { Media } from "src/medias/medias.interface";
import { User } from "../users/users.interface";

export interface Article {
 title : string;
 content :string;
 media : Media;
 user : User;
 publish ?: boolean;
 cathegorie : Cathegorie;   
}
