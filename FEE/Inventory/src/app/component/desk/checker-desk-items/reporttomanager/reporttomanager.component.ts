import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporttomanager',
  templateUrl: './reporttomanager.component.html',
  styleUrls: ['./reporttomanager.component.css']
})
export class ReporttomanagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reloadCurrentPage() {
    window.location.reload();
   }

   thanks(){
    Swal.fire("Successfully Reported ..")
   }
}
