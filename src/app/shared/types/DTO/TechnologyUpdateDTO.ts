import {Category} from "../Category";

export interface TechnologyUpdateDTO {
  id: number,
  name: string,
  category: Category,
  description: string,
  // TODO: Send changed by user
}
