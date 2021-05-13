import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporttoadmin',
  templateUrl: './reporttoadmin.component.html',
  styleUrls: ['./reporttoadmin.component.css']
})
export class ReporttoadminComponent implements OnInit {

  constructor() { }
  reloadCurrentPage() {
    window.location.reload();
   }
  ngOnInit(): void {
  }

  thanks(){
    Swal.fire("Successfully Reported ..")
  }
}
