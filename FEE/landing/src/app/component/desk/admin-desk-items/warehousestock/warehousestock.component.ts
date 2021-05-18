import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/service/warehouse.service';

@Component({
  selector: 'app-warehousestock',
  templateUrl: './warehousestock.component.html',
  styleUrls: ['./warehousestock.component.css']
})
export class WarehousestockComponent implements OnInit {
  allwarehouseStocks :any = [];
  p:any=1;
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
