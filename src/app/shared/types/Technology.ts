import {Ring} from "./Ring";
import {Category} from "./Category";

export interface Technology {
  id: number,
  name: string,
  category: Category,
  ring?: Ring,
  description: string,
  ring_description?: string,
  published: boolean,
  createdByUserId: number,
  createdAt: Date;
  publishedAt?: Date,
  lastUpdated?: Date,
}
