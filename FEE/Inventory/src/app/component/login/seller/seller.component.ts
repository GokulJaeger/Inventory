import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  sellerForm!: FormGroup;
  submitted:boolean=false;
  constructor(private fb:FormBuilder) { }
  
  

  ngOnInit(): void {
    this.sellerForm=this.fb.group({
      email:['',Validators.required],
      pwd:['',Validators.required]
    })
    
 
  }
  get f() { 
    return this.sellerForm.controls; }
  onSubmit()
 {
   this.submitted=true;
 }
}
