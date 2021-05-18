import { Component, OnInit } from '@angular/core';
import { DamageService } from 'src/app/service/damage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkdamagestock',
  templateUrl: './checkdamagestock.component.html',
  styleUrls: ['./checkdamagestock.component.css']
})
export class CheckdamagestockComponent implements OnInit {

  alldamageproducts :any = [];
  p:any=1;
  constructor(private Api:DamageService) { }

  ngOnInit(): void {
    this.alldamageproduct();
  }


  alldamageproduct(){
    this.Api.getdamageproducts().subscribe((response)=> {
      this.alldamageproducts = response;
    })
    }
  reloadCurrentPage() {
    window.location.reload();
   }
   opensweet(){
    Swal.fire({
        title: 'Success !',
        text: 'Damage Stock has Been Approved..  ',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes'
      })
    
}

}