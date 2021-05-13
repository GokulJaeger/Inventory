import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  adminForm!: FormGroup;
  submitted:boolean=false;
  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
      this.adminForm=this.fb.group({
        firstName:['',Validators.required],
        pwd:['',Validators.required]
      })
  }
  get f() { return this.adminForm.controls; }
 onSubmit()
 {
   this.submitted=true;
 }
}


