import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Technology} from "../types/Technology";


@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private technologyUrl = 'api/technologies';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient) { }


  getTechnology(id: number): Observable<Technology> {
    const url = `${this.technologyUrl}/${id}`;
    return this.http.get<Technology>(url).pipe(
      tap(_ => this.log(`fetched technology id=${id}`)),
      catchError(this.handleError<Technology>(`getTechnology id=${id}`))
    );
  }

  getTechnologies(): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.technologyUrl).pipe(
      tap(_ => this.log('fetched technologies')),
      catchError(this.handleError<Technology[]>('getTechnologies', []))
    );
  }

  addTechnology(technology: Technology): Observable<Technology> {
    return this.http.post<Technology>(this.technologyUrl, technology, this.httpOptions).pipe(
      tap((newTechnology: Technology) => this.log(`added technology w/ id=${newTechnology.id}`)),
      catchError(this.handleError<Technology>('addTechnology'))
    );
  }

  updateTechnology(technology: Technology): Observable<any> {
    return this.http.put(this.technologyUrl, technology, this.httpOptions).pipe(
      tap(_ => this.log(`updated technology id=${technology.id}`)),
      catchError(this.handleError<Technology>('updateTechnology'))
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
