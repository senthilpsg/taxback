import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.css']
})
export class TransactionViewComponent implements OnInit {
  public transaction: Transaction;
  constructor(
    private route: ActivatedRoute,  
    private trans: TransactionService
  ) { }

  ngOnInit() {
    this.getTransaction();
  }

  getTransaction(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.trans.getTransaction(id).subscribe(
      trans => {
        this.transaction = trans;
        console.log(this.transaction);
      }
    );

  }

}
