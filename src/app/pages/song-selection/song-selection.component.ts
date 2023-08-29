import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-selection',
  templateUrl: './song-selection.component.html',
  styleUrls: ['./song-selection.component.scss'],
})
export class SongSelectionComponent  implements OnInit {
  public progress = 0.5;

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
];

  constructor(private router: Router) {
    // setInterval(() => {
    //   this.progress += 0.01;

    //   // Reset the progress bar when it reaches 100%
    //   // to continuously show the demo
    //   if (this.progress > 1) {
    //     // setTimeout(() => {
    //     //   this.progress = 0;
    //     // }, 1000);
    //   }
    // }, 50);
   }

  ngOnInit() {}

  
    back(){
      this.router.navigate(['bandDetail']);
    }
    

}
