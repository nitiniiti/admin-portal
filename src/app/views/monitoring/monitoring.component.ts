import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'monitoring-dashboard',
  templateUrl: 'monitoring.component.html'
})
export class MonitoringComponent {
  constructor(
    private router: Router,
  ) { }

}
