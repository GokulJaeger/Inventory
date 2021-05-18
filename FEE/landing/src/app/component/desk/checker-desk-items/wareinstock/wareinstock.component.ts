import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/service/warehouse.service';

@Component({
  selector: 'app-wareinstock',
  templateUrl: './wareinstock.component.html',
  styleUrls: ['./wareinstock.component.css']
})
export class WareinstockComponent implements OnInit {
p:any=1;
  allwarehouseStocks :any = [];
  constructor(private Api:WarehouseService) { }
  allwarestock(){
    this.Api.getwaregoods().subscribe((response)=> {
      this.allwarehouseStocks = response;
    })
    }
  ngOnInit(): void {
    this.allwarestock();
  }
  reloadCurrentPage() {
    window.location.reload();
   }
}
