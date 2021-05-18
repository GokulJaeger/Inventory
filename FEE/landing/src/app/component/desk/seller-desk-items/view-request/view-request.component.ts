import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
p:any=1;
  allproducts: any = [];
  constructor(private Api: RequestService) { }
  allproduct() {
    this.Api.getproducts().subscribe((response) => {
      this.allproducts = response;
    })
  }

  ngOnInit(): void {
    this.allproduct();
  }

  reloadCurrentPage() {
    window.location.reload();
  }
  opensweet(){
    Swal.fire({
        title: 'Success !',
        text: 'Request Has Been Forwarded ',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes'
      })
    
}
}
