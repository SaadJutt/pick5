import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}

  bandList(){
      console.log('call');
      this.router.navigateByUrl('tabs/bandlist');
  }

  isLeaderBoard() {
    this.router.navigateByUrl('tabs/leaderboard');
  }

  isPlayingHistory(){
    this.router.navigateByUrl('tabs/playinghistory');
  }

  isPaymentHistory() {
    this.router.navigateByUrl('tabs/payinghistory');
  }

}
