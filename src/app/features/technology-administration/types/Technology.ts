import {Ring} from "./Ring";
import {Category} from "./Category";

export interface Technology {
  id: number,
  name: string,
  category: Category,
  ring?: Ring,
  description: string,
  published: boolean
}


