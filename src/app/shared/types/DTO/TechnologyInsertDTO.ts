import {Category} from "../Category";
import {Ring} from "../Ring";

export interface TechnologyInsertDTO {
  name: string,
  category: Category,
  description: string,
  ring?: Ring,
  ring_description?: string,
  // TODO: Send created_by_user
}
