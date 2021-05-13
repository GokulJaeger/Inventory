import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporttosuppilier',
  templateUrl: './reporttosuppilier.component.html',
  styleUrls: ['./reporttosuppilier.component.css']
})
export class ReporttosuppilierComponent implements OnInit {

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
