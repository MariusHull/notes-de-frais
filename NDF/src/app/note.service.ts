import { Injectable } from '@angular/core';
import { Note } from './note';
//import { NOTES } from './mock-notes';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from '../../node_modules/rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TagPlaceholder } from '../../node_modules/@angular/compiler/src/i18n/i18n_ast';
import { CATCH_ERROR_VAR } from '../../node_modules/@angular/compiler/src/output/output_ast';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class NoteService {

  private notesUrl: string = 'http://localhost:3000/notes';
  //future url : "http://localhost:3000/notes/" "api/notes"


  /** GET heroes from the server */
  getNotes (): Observable<Note[]> {

  return this.http.get<Note[]>(this.notesUrl)
  }

  getNote (id: string): Observable<Note> {
    const url = `${this.notesUrl}/${id}`;
    return this.http.get<Note>(url);
    }

  getNotesUser (userId: string): Observable<Note[]> {
    const url = `${this.notesUrl}/getUserNotes/${userId}`;
    return this.http.get<Note[]>(url);
    }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.notesUrl, note, httpOptions)
    .pipe(
      tap((note: Note) => console.log("sucessfully added " + note)),
      catchError(this.handleError<Note>('addNote'))
    )

  }

  deleteNote(note: Note): Observable<Note> {
    const url = `${this.notesUrl}/${note._id}`;
    return this.http.put<Note>(url, note, httpOptions)
    .pipe(
      tap((note: Note) => window.alert("La note : " + note.title + " à bien été supprimée.")),
      catchError(this.handleError<Note>('deleteNote'))
    )

  }

  updateNote(note: Note): Observable<Note> {
    const url = `${this.notesUrl}/${note._id}`;
    return this.http.put<Note>(url, note, httpOptions)
    .pipe(
      tap((note: Note) => window.alert("La note : " + note.title + " à bien été modifiée.")),
      catchError(this.handleError<Note>('updateNote'))
    )

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }
}
