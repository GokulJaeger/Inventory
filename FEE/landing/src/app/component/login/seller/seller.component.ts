import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})

export class SellerComponent implements OnInit {
  sellerForm!: FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder, private route:Router) { }
  loginForm:FormGroup =new FormGroup({
    username:new FormControl ('',
    Validators.compose([
    Validators.required,
    Validators.pattern('[a-zA-Z]+')
  ])),

   password: new FormControl('',
    Validators.compose([
    Validators.required,
    Validators.pattern('[a-zA-Z]+')
  ]))
});

  SUPloginForm:FormGroup =new FormGroup({
    usernames:new FormControl ('',      
    Validators.compose([
      Validators.required,
      Validators.pattern('[a-zA-Z]+')
    ])),

     passwords: new FormControl('',
      Validators.compose([
      Validators.required,
      Validators.pattern('[a-zA-Z]+')
    ]))
  });
  

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

 onSubmitss()
 {
   console.log(this.SUPloginForm.value);
   if(this.SUPloginForm.invalid)
   {
     Swal.fire("error"," Enter Valid Data","error");
     return;
   }
   if(this.SUPloginForm.valid)
   {
     
    this.route.navigate(['/vendordesk']);
     
   }
 }
 onSubmits()
 {
   console.log(this.loginForm.value);
   if(this.loginForm.invalid)
   {
     Swal.fire("error"," Enter Valid Data","error");
     return;
   }
   if(this.loginForm.valid)
   {
    this.route.navigate(['/sellerdesk']);
     
   }
 }
}



