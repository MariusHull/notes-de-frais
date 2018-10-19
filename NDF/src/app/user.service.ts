import { Injectable } from '@angular/core';
import { Note } from './note';
//import { NOTES } from './mock-notes';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from '../../node_modules/rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TagPlaceholder } from '../../node_modules/@angular/compiler/src/i18n/i18n_ast';
import { CATCH_ERROR_VAR } from '../../node_modules/@angular/compiler/src/output/output_ast';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string = 'http://localhost:3000/users';

    /** GET users from the server */
    getUsers (): Observable<User[]> {

      return this.http.get<User[]>(this.usersUrl)
    }
    "getUsersWithFields/:name/:_id/:accountype"

    /**Get only one user based on his ID */
    getNote (_id: string): Observable<Note> {
      const url = `${this.usersUrl}/${_id}`;
      return this.http.get<Note>(url);
      }

    /** Get several users based on fields */  
    getUsersWithFields (userName:string, accountType: String, _id: string): Observable<Note[]> {
      const url = `${this.usersUrl}/getUsersWithFields/${name}/${_id}/${accountType}`;
      return this.http.get<Note[]>(url);
      }

  constructor(private http: HttpClient) { }
}
