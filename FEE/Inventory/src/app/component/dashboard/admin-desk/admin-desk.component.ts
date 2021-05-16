import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-desk',
  templateUrl: './admin-desk.component.html',
  styleUrls: ['./admin-desk.component.css']
})
export class AdminDeskComponent implements OnInit {

  content?: string;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
