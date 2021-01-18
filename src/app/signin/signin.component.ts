import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from "angularx-social-login";
import { Router } from "@angular/router";
import { HostNameService } from "src/app/services/host-name/host-name.service";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public user: SocialUser = new SocialUser;

  constructor(
    private authService: AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.authService.isLogin();
  }


  //form slide trigger
  slideCheck: boolean = false;

  slideTrigger(){
    if (this.slideCheck == false) {
      this.slideCheck = true;
    } else {
      this.slideCheck = false;
    }
  }
  //OAuth
  hostSignInWithGoogle(): void {
    this.authService.hostSignInWithGoogle();
  }

  playerSignInWithGoogle(): void {
    this.authService.playerSignInWithGoogle();
  }

  //445477872194-pnae5bs7bsm8pubromf5rtpjvur97ao3.apps.googleusercontent.com

}
