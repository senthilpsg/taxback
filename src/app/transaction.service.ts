import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Transaction } from './transaction';
import { Router } from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  private user: string = null;

  constructor(private http: HttpClient, private route: Router) {

    let temp = localStorage.getItem('userEmail');
    
    //this.user = 'priya@gmail.com';

    if (!this.user && temp)
      this.user = temp;

    if (!this.user)
      this.route.navigate(['/']);

  }

  setUser(user: string): void {
    this.user = user;

    localStorage.setItem('userEmail', user);
  }

  getUser(): string {
    return this.user;
  }

  getAllTransactions(): Observable<any> {
    let url = 'https://jointhecrew.in/api/txns/' + this.user;

    return this.http.get(url).pipe(
      map(res => res || {})
    );
  }

  getTransaction(id: number): Observable<any> {
    let url = 'https://jointhecrew.in/api/txns/' + this.user + "/" + id;
  
    return this.http.get(url).pipe(
      map(res => res || {})
    );
  }

  addTransaction(trans: Transaction): Observable<any> {
    let url = 'https://jointhecrew.in/api/txns/' + this.user;
    return this.http.post(url, JSON.stringify(trans)).pipe(
    );
  }

  updateTransaction(trans: Transaction): Observable<any> {

    let url = 'https://jointhecrew.in/api/txns/' + this.user + "/" + trans.id;

    return this.http.post(url, JSON.stringify(trans));

  }

  deleteTransaction(id){
    let url = 'https://jointhecrew.in/api/txns/' + this.user + "/" + id;
    
    return this.http.delete(url);
  }

  clearCache(){
    
    localStorage.removeItem('userEmail');
    
    
  }

  logout(){
    
    this.clearCache();
    this.route.navigate(['/']);
  }
  
}
