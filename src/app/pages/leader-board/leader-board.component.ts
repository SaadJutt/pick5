import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss'],
})
export class LeaderBoardComponent  implements OnInit {

  public leaderBoard = [
    {
    name: 'Jessica',
    points: '21, 714 k'
  },
  {
    name: 'Shawn',
    points: '18, 555 k'
  },
  {
    name: 'Jack',
    points: '10, 714 k'
  },
  {
    name: 'Jessica',
    points: '21, 714 k'
  },
  {
    name: 'Shawn',
    points: '18, 555 k'
  },
  {
    name: 'Jack',
    points: '10, 714 k'
  }
];

  constructor(private router: Router) { }

  ngOnInit() {}

  back(){
    this.router.navigate(['tabs']);
  }

  byBand() {
    this.router.navigate(['tabs/byband']);
  }
}
