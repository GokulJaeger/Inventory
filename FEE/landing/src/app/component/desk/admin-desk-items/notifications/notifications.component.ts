import { Component, OnInit } from '@angular/core';
import { NotificatonService } from 'src/app/service/notificaton.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit {
  a: number = 0;
  allAlerts: any = [];
  constructor(private Api: NotificatonService) {}

  ngOnInit(): void {
    this.allalert();
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  summa() {
    this.a = 1;
  }
  allalert() {
    this.Api.getAlerts().subscribe((response) => {
      this.allAlerts = response;
    });
  }
}
