import {Ring} from "../Ring";

export interface TechnologyUpdateRingDTO {
  id: number,
  ring: Ring,
  ring_description?: string,
  // TODO: Send changed_by_user
}
