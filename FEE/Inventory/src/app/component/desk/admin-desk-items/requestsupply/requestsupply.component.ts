import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Model/products';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-requestsupply',
  templateUrl: './requestsupply.component.html',
  styleUrls: ['./requestsupply.component.css']
})
export class RequestsupplyComponent implements OnInit {
products = new Products();
dataarray:any = [];
  constructor() { }

  ngOnInit(): void {
    this.dataarray.push(this.products);    
  }
  
  reloadCurrentPage() {
    window.location.reload();
   }

   Add(){
  this.products=new Products();
  this.dataarray.push(this.products);

}
submit(){
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Save`,
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
 
}
}
