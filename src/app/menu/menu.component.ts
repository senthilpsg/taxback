import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private trans: TransactionService) { }

  ngOnInit() {
  }

  logout(){
    
    this.trans.logout();
  }

  isLogged(){
    if(this.trans.getUser()){
      return true;
    }      
    else {
      return false;
    }
      
  }


}
