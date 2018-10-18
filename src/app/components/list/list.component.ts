import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { Issue } from '../../issue.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['userId','title','body'];

  constructor(private http: HttpClient , private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://jsonplaceholder.typicode.com/posts?_start=10&_limit=10')
    .subscribe((data: Issue[]) => this.issues = data );

  }

  editIssue(id) {
  this.router.navigate([`/edit/${id}`]);
}

}
