import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-schedule',
  templateUrl: './location-schedule.component.html',
  styleUrls: ['./location-schedule.component.scss'],
})
export class LocationScheduleComponent  implements OnInit {

  newArray = [{
    day: 'Friday',
    date: '05 - 07', 
    type:'Providence'}
  ,
  {
    day: 'Saturday',
    date: '06 - 07', 
    type:'Uniondale'}
  ,
  {
    day: 'Sunday',
    date: '07 - 07', 
    type:'Uniondale'}
  ,
  {
    day: 'Monday',
    date: '08 - 07', 
    type:'Providence'}
  ,
  {
    day: 'Tuesday',
    date: '09 - 07', 
    type:'Uniondale'}
  ,
  {
    day: 'Wednesday',
    date: '10 - 07', 
    type:'Uniondale'}
  ,
  {
    day: 'Thursday',
    date: '11 - 07', 
    type:'Uniondale'}
  ,
  {
    day: 'Friday',
    date: '12 - 07', 
    type:'Uniondale'}
  ,
  {
    day: 'Saturday',
    date: '13 - 07', 
    type:'Uniondale'}
];

  constructor( private router: Router) {
   
   }

  ngOnInit() {}
  back(){
    this.router.navigateByUrl('tabs/bandlist');
  }

  selectSong() {
    this.router.navigateByUrl('tabs/selectsong');
  }
}
