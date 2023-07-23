import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-schedule',
  templateUrl: './location-schedule.component.html',
  styleUrls: ['./location-schedule.component.scss'],
})
export class LocationScheduleComponent  implements OnInit {

  newArray = [];

  constructor( private router: Router) {
    this.newArray.length = 10;
   }

  ngOnInit() {}
  back(){
    this.router.navigateByUrl('tabs/leaderboard');
  }
}
