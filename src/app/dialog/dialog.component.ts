import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {
  detailForm: FormGroup
  constructor(private fb:FormBuilder, private api: ApiService) { 
    this.detailForm = this.fb.group({
      productName:(['', Validators.required]),
      category:(['', Validators.required]),
      fressness:(['', Validators.required]),
      price:(['', Validators.required]),
      comment:(['', Validators.required]),
      date:(['', Validators.required]),
     
    });
  }
  get addForm() { return this.detailForm.controls; }


  freshlist= [
  "Brand New",
  "Second Hand",
  "Refunbished"  
  ]
  
  ngOnInit() {
    
  }
 
  addProducts() {
    if(this.detailForm.valid) {
      this.api.postProduct(this.detailForm.value)
      .subscribe({
        next: (res) => {
          alert("product added")
        },
        error:() => {
          alert("Error while adding")
        }
      })
    }
    console.log(this.detailForm.value)
    debugger
  }
}
