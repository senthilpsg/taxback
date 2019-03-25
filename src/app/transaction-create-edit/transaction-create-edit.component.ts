import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";


@Component({
  selector: 'app-transaction-create-edit',
  templateUrl: './transaction-create-edit.component.html',
  styleUrls: ['./transaction-create-edit.component.css']
})
export class TransactionCreateEditComponent implements OnInit {

  public transaction: Transaction = new Transaction();
  public title: string = "Create Transaction";
  public showSuccess: Boolean = false;
  public showPostError: Boolean = false;
  public error: string = '';

  public displayAsChild: boolean = false ;
  


  constructor(
    private transactionService: TransactionService,
    private routeParams: ActivatedRoute,
    private route: Router

  ) { }

  ngOnInit() {

    let id= this.routeParams.snapshot.paramMap.get('id');

    if(id){
      this.title = "Edit Transaction";
      this.transactionService.getTransaction(Number(id)).subscribe(
        trans => {
          this.transaction = trans;
          console.log('edit',trans);
        }
      );
    }
    else{
      this.transaction.email = this.transactionService.getUser();
    }


  }

  submit() {

    console.log('submit', this.transaction);

     if(this.transaction.id)
       this.updateTransaction();
     else {
      
      //this.transaction.email = this.transactionService.getUser();
      this.createTransaction();
     }
      
     

  }

  createTransaction() {
      this.transactionService.addTransaction(this.transaction).subscribe(
        data =>{
            
            console.log('created transaction');
            this.route.navigate(['/list']);
          } 
      );;
  }

  updateTransaction() {
      this.transactionService.updateTransaction(this.transaction).subscribe(
        data => this.route.navigate(['/list'])
      );
  }

}
