import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/service/shop.service';
import { UserprofileService } from 'src/app/service/userprofile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  allusers :any = [];
  p:any=1;
  constructor(private Api:UserprofileService) { }

  ngOnInit(): void {
    this.alluser();
  }

  alluser(){
    this.Api.getusers().subscribe((response)=> {
      this.allusers = response;
    })
    }
  reloadCurrentPage() {
    window.location.reload();
   }
}
