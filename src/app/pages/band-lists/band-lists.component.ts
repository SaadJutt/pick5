import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-band-lists',
  templateUrl: './band-lists.component.html',
  styleUrls: ['./band-lists.component.scss'],
})
export class BandListsComponent  implements OnInit {


   myArray = [];
   isActive = false;
   isBandListFlag = true;

   isUpcommingArray = [
    {
      day: 'Saturday',
      date: 'May, 23 2023',
      bandsList: [
        {
        bandName: 'aaaaaaaaabc',
        price :'$20'
      },
      {
        bandName: 'aaaaaaaaabc',
        price :'$20'
      },{
        bandName: 'aaaaaaaaabc',
        price :'$20'
      },
      {
        bandName: 'aaaaaaaaabc',
        price :'$20'
      }
    ]
   },
   {
    day: 'Sunday',
    date: 'May, 24 2023',
    bandsList: [
      {
      bandName: 'aaaaaaaaabc',
      price :'$20'
    },
    {
      bandName: 'aaaaaaaaabc',
      price :'$20'
    },{
      bandName: 'aaaaaaaaabc',
      price :'$20'
    },
    {
      bandName: 'aaaaaaaaabc',
      price :'$20'
    }
  ]
 }
  ];

  constructor(private router: Router) {
    this.myArray.length = 10;
   }

  ngOnInit() {}

  isBandList() {
    this.isBandListFlag = false;
    if (!this.isActive) {
      this.isActive = !this.isActive;
    }
  }

  isUpcomming() {
    this.isBandListFlag = true;
    this.isActive = !this.isActive;
  }

  back(){
    this.router.navigate(['tabs']);
  }

}
