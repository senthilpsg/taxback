import { Component, OnInit } from '@angular/core';
import {TransactionService} from '../transaction.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  public transactions: Transaction[];
  public user: string;

  constructor(private trans: TransactionService) { }

    ngOnInit() {

      this.getTransactions();
    
  }

  getTransactions(){
    this.trans.getAllTransactions().subscribe(
      trans =>{
          this.transactions = trans;
          console.log(this.transactions);

        } 
    );
  }

  delete(id){
    this.trans.deleteTransaction(id).subscribe(
      res => this.getTransactions()
    );
  }




}
