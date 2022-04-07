import { Article } from "src/articles/articles.interface";
import { User } from "src/users/users.interface";

export interface Comment {
    comment : string;
    article: Article ;
    user : User ;
}
