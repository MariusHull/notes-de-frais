import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


// The user details that will be sent to the components requiring it
export interface UserDetails {
  _id: string;
  email: string;
  accountType: string;
  accountManager: string;
  accountManagerName: string;
  name: string;
  exp: number;
  iat: number;
}

// A string to store the token when receiving it
interface TokenResponse {
  token: string;
}

// All the informations carried by the token
export interface TokenPayload {
  email: string;
  password: string;
  accountType : string;
  accountManager: string;
  accountManagerName: string;
  name?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private token : string;
  private authUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient, private router: Router) { }

  //Method to save the token when getting it from API
  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  //Method to get the token every time it's required (for instance for any component)
  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  //Method to clear the token once logged out
  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  //Returns the user's details if one is logged in
  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  //Returns a boolean (true if a user is logged in)
  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  // Returns true if the user is an Admin (Auth Guard purpose)
  public isAdmin(): boolean {
    const user = this.getUserDetails();
    if (user.accountType === "Administrateur") {
      return true;
    } else {
      return false;
    }
  }

  // Returns true if the user is an Account Manager (Auth Guard purpose)
  public isAccountManager(): boolean {
    const user = this.getUserDetails();
    if (user.accountType === "Gestionnaire" || user.accountType === "Administrateur") {
      return true;
    } else {
      return false;
    }
  }
  

//      /\
//     /  \
//    / || \
//   /  ||  \
//  /   ||   \
// /          \
// ------------
//TODO : Update the API's path
  //Method that organizes the api calls
  private request(method: 'post'|'get', type: 'login'|'register'|'profile', user?: TokenPayload): Observable<any> {
    let base;
  
    if (method === 'post') {
      base = this.http.post(this.authUrl+`${type}`, user);
    } else {
      base = this.http.get(this.authUrl+`${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }
  
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
   
    return request;
  }


  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }
  
  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }
  
  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

}
