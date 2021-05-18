import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reloadCurrentPage() {
    window.location.reload();
   }
   opensweet(){
    Swal.fire({
        title: 'Success !',
        text: 'Our team Will Revert Back To You!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes'
      })
    
}

}
