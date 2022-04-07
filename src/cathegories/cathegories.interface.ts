import { Media } from "src/medias/medias.interface";
import { User } from "src/users/users.interface";

export interface Cathegorie {
    title :string ;
    description : string ;
    media : Media ;
    user : User ;
    publish : boolean;
}
