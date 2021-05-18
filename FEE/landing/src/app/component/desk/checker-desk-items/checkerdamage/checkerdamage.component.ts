import { Component, OnInit } from '@angular/core';
import { DamageService } from 'src/app/service/damage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkerdamage',
  templateUrl: './checkerdamage.component.html',
  styleUrls: ['./checkerdamage.component.css']
})
export class CheckerdamageComponent implements OnInit {

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
        title: 'Report !',
        text: 'Damage Stock has Been Reported to Manager  ',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes'
      })
    
}
}
