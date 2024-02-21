import {Ring} from "../Ring";

export interface TechnologyPublishDTO {
  id: number,
  ring: Ring,
  ring_description: string,
  // TODO: Send created_by_user
}
