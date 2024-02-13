import {Category} from "../../../shared/types/Category";
import {Ring} from "../../../shared/types/Ring";
import {ChangeType} from "./ChangeType";

export interface TechnologyChangeEntry {
  technology_id: number,
  name: string,
  category: Category,
  ring?: Ring,
  description: string,
  ring_description?: string,
  published: boolean,
  updatedAt: Date,
  updatedByUserId: number,
  changeType: ChangeType;
}
