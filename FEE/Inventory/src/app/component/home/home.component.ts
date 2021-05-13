import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Navigate(elem: HTMLElement) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }
  constructor() { }

  ngOnInit(): void {
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
