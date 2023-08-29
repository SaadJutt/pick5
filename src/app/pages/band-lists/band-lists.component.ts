import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-band-lists',
  templateUrl: './band-lists.component.html',
  styleUrls: ['./band-lists.component.scss'],
})
export class BandListsComponent  implements OnInit {


  myArray = ['Bearly Dead', 'Phish', 'Amazing Crown', 'Angry Salad', 'Small Factory', 'Kites','Bearly Dead', 'Phish', 'Amazing Crown', 'Angry Salad', 'Small Factory', 'Kites', 'Bearly Dead', 'Phish', 'Amazing Crown', 'Angry Salad', 'Small Factory', 'Kites','Bearly Dead', 'Phish', 'Amazing Crown', 'Angry Salad', 'Small Factory', 'Kites'];

   isActive = true;
   isBandListFlag = false;

   isUpcommingArray = [
    {
      day: 'Saturday',
      date: 'May, 23 2023',
      bandsList: [
        {
        bandName: 'Bearly Dead - Providence',
        price :'$20'
      },
      {
        bandName: 'Neughbor- Uniondale',
        price :'$20'
      },{
        bandName: 'Beoga - Providence ',
        price :'$20'
      },
      {
        bandName: '84 Tigers - Providence',
        price :'$20'
      }
    ]
   },
   {
    day: 'Sunday',
    date: 'May, 24 2023',
    bandsList: [
      {
      bandName: 'Jerry Cantral - Providence',
      price :'$20'
    },
    {
      bandName: 'Goose - Uniondale',
      price :'$20'
    },{
      bandName: 'Phish - Uniondale ',
      price :'$20'
    }
  ]
 },
 {
  day: 'Monday',
  date: 'May, 25 2023',
  bandsList: [
    {
    bandName: 'Jerry Cantral - Providence',
    price :'$20'
  },
  {
    bandName: 'Goose - Uniondale',
    price :'$20'
  },{
    bandName: 'Phish - Uniondale ',
    price :'$20'
  }
]
},{
  day: 'Tuesday',
  date: 'May, 26 2023',
  bandsList: [
    {
    bandName: 'Jerry Cantral - Providence',
    price :'$20'
  },
  {
    bandName: 'Goose - Uniondale',
    price :'$20'
  },{
    bandName: 'Phish - Uniondale ',
    price :'$20'
  }
]
}
  ];

  constructor(private router: Router) {
    this.myArray,length = 20;
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
