import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['menu/home']);
  }

  ionViewDidEnter() {
    console.log("ya entre y vi la intro");
  }
}
