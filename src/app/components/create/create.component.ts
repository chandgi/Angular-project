import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { IssueService } from '../../issue.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) {
    const alphaNumericPatern = '^$|^[A-Za-z0-9]+';
    this.createForm = this.fb.group({
    title: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(24),
      Validators.pattern(alphaNumericPatern)])),
    body: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(50)]))
    });
  }

  addIssue(title, body) {
    return this.issueService.addIssue(title, body).subscribe(data => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
