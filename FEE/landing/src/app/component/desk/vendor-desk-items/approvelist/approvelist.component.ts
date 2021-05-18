import { Component, OnInit } from '@angular/core';
import { ApproveService } from 'src/app/service/approve.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-approvelist',
  templateUrl: './approvelist.component.html',
  styleUrls: ['./approvelist.component.css']
})
export class ApprovelistComponent implements OnInit {
  Approveproducts: any = [];
  p:any=1;
  constructor(private Api: ApproveService) { }
  ngOnInit(): void {
    this.Approveproduct();
  }
  reloadCurrentPage() {
    window.location.reload();
   }


   Approveproduct() {
    this.Api.appoveproducts().subscribe((response) => {
      this.Approveproducts = response;
    })
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
