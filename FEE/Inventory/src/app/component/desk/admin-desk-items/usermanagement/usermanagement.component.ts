import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reloadCurrentPage() {
    window.location.reload();
   }
   opensweet(){
    Swal.fire({
        title: 'Success !',
        text: 'Your data has been inserted',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes'
      })
    
}

}

