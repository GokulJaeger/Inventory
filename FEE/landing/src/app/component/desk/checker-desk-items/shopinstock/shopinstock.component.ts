import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/service/shop.service';

@Component({
  selector: 'app-shopinstock',
  templateUrl: './shopinstock.component.html',
  styleUrls: ['./shopinstock.component.css']
})
export class ShopinstockComponent implements OnInit {
  allStocks :any = [];
  p:any=1;
  constructor(private Api:ShopService) { }

  ngOnInit(): void {
    this.allstock();
  }


  allstock(){
    this.Api.getgoods().subscribe((response)=> {
      this.allStocks = response;
    })
    }

  reloadCurrentPage() {
    window.location.reload();
   }
}
