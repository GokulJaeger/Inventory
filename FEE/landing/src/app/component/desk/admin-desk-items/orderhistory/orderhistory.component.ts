import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
allproducts :any = [];
p:any= [];
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


}
