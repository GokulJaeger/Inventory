import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-incomingstock',
  templateUrl: './incomingstock.component.html',
  styleUrls: ['./incomingstock.component.css']
})
export class IncomingstockComponent implements OnInit {
  allproducts :any = [];
  p:any=1;
  constructor(private Api:RequestService) { }

  ngOnInit(): void {
    this.allproduct();
  }

  allproduct(){
    this.Api.getproducts().subscribe((response)=> {
      this.allproducts = response;
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
          'All the  Products has been Checked And Stored.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Are You Sure',
          'All the  Products has been Damaged And Returned:)',
          'success'
        )
      }
    })
    
  }
}
