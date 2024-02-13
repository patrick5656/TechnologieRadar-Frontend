import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {TechnologyChangeEntry} from "../features/technology-administration/types/TechnologyChangeEntry";

@Injectable({
  providedIn: 'root'
})
export class TechnologyChangeHistoryMockApiService implements InMemoryDbService{

  createDb() {
    const technologiesChangeEntries: TechnologyChangeEntry[] = [];

    return technologiesChangeEntries;
  }
  genId(entries: TechnologyChangeEntry[]): number {
    return entries.length > 0 ? Math.max(...entries.map(entry => entry.technology_id)) + 1 : 1;
  }
}
