import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import {Router} from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:string;
  constructor(private trans: TransactionService,
              private route: Router
    ) { }

  ngOnInit() {
  }

  login(){
    this.trans.setUser(this.email);
    this.route.navigate(['/list']);
  }

}
