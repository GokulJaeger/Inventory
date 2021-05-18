import { Component, OnInit } from '@angular/core';
import { DamageService } from 'src/app/service/damage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-damagestock',
  templateUrl: './damagestock.component.html',
  styleUrls: ['./damagestock.component.css']
})
export class DamagestockComponent implements OnInit {

  alldamageproducts :any = [];
  p :any=1;
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

   approve() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Apprrove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Approved!',
          'Your Order has been Approved.',
          'success'
        )
      }
    })
  }

  deny(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Deny it!',
      cancelButtonText: 'No, Approve!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Denied!',
          'Your Order has been Denied.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Are You Sure',
          'Your Order  is safe And Yet ToBe Approved :)',
          'success'
        )
      }
    })
    
  }


}
