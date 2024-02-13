import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {TechnologyChangeEntry} from "../types/TechnologyChangeEntry";

@Injectable({
  // TODO: Remove from root to be only available from current module
  providedIn: 'root'
})
export class TechnologyChangeHistoryService {

  private technologyChangeHistoryUrl = 'api/technologiesChanges';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  createHistoryEntry(technologyChangeEntry: TechnologyChangeEntry): Observable<TechnologyChangeEntry> {
    return this.http.post<TechnologyChangeEntry>(this.technologyChangeHistoryUrl, technologyChangeEntry, this.httpOptions).pipe(
      tap((newEntry: TechnologyChangeEntry) => this.log(`added history entry: id=${newEntry.technology_id}`)),
      catchError(this.handleError<TechnologyChangeEntry>('createHistoryEntry'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    // TODO: create a log service
    console.log(message);
  }
}
