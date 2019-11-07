import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Token } from '@interface/token';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = environment.api + 'register';
  private loginUrl    = environment.api + 'login';

  constructor(private http: HttpClient, private router: Router) { }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error!');
  }

  registerUser(user): Observable<Token> {
    return this.http.post<Token>(this.registerUrl, user).pipe(catchError(this.errorHandler));
  }

  loginUser(user): Observable<Token> {
    return this.http.post<Token>(this.loginUrl, user).pipe(catchError(this.errorHandler));
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['events']);
  }

}
