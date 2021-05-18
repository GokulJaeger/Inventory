import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/service/shop.service';

@Component({
  selector: 'app-shopgoods',
  templateUrl: './shopgoods.component.html',
  styleUrls: ['./shopgoods.component.css']
})
export class ShopgoodsComponent implements OnInit {
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
