import { Component, OnInit } from '@angular/core';
import { PerishableService } from 'src/app/service/perishable.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplylist',
  templateUrl: './supplylist.component.html',
  styleUrls: ['./supplylist.component.css']
})
export class SupplylistComponent implements OnInit {
  allGoods :any = [];
  p:any=1;
  constructor(private Api:PerishableService) { }

  ngOnInit(): void {
    this.allgood();
  }
  allgood(){
    this.Api.getgoods().subscribe((response)=> {
      this.allGoods = response;
    })
    }

  reloadCurrentPage() {
    window.location.reload();
   }
   Add(){
    Swal.fire({
      title: 'Sales Alert',
      text: "These products are about to rotten. Please sell as soon as possible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Infromed!',
          '.Try to Clear the Stock..',
          'success'
        )
      }
    })
   }
}
