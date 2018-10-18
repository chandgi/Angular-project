import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient) { }

  getUser(userId) {
  return this.http.get('https://jsonplaceholder.typicode.com/posts/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

addIssue(title, body) {
  return this.http.post(`http://jsonplaceholder.typicode.com/posts`, {title,body, userId: 1});
}


}
