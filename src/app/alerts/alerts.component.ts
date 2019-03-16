import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  alertClosed = true;
  alertType = 'info';
  alertContent = 'Try to close this alert!';

  @ViewChild('alert')
  alert: ElementRef;

  openAlert(alertType: string, alertContent: string) {
    this.alertContent = alertContent;
    this.alertType = alertType;
    this.alertClosed = false;
    setTimeout(() => {
      this.alertClosed = true;
    }, 3000);
    // this.alertClosed = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
