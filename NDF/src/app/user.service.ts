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

  // Adress to access the back
  private usersUrl: string = 'http://localhost:3000/users';

    /** GET users from the server */
    getUsers (): Observable<User[]> {

      return this.http.get<User[]>(this.usersUrl)
    }
    

    /**Get only one user based on his ID */
    getUser (_id: string): Observable<User> {
      const url = `${this.usersUrl}/${_id}`;
      return this.http.get<User>(url);
    }

      // Updates a user (excepted its ID)
  updateUser(user: User): Observable<User> {
    const url = `${this.usersUrl}/${user._id}`;
    return this.http.put<User>(url, user, httpOptions)
    .pipe(
      tap((note: Note) => window.alert("Le type du compte à bien été modifié.")),
      catchError(this.handleError<User>('updateUser'))
    )

  }



    // Error Handler
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


  /** Get several users based on fields */  
  getUsersWithFields (userName:string, accountType: String, _id: string): Observable<Note[]> {
    const url = `${this.usersUrl}/getUsersWithFields/${name}/${_id}/${accountType}`;
    return this.http.get<Note[]>(url);
  }

  constructor(private http: HttpClient) { }
}
