import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
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



manloginForm:FormGroup =new FormGroup({
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

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.manloginForm.value);
    if(this.manloginForm.invalid)
    {
      Swal.fire("error"," Enter Valid Data","error");
      return;
    }
    if(this.manloginForm.valid)
    {
      
     this.route.navigate(['/checkerdesk']);
      
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
     this.route.navigate(['/warehousedesk']);
      
    }
  }

}
