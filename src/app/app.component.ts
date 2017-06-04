import { Component } from '@angular/core';
import { AF } from "./providers/af";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public isLoggedIn: boolean;
  constructor(public afService: AF, private router: Router) {
    this.afService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          console.log("Not Logged in.");
          this.isLoggedIn = false;
          this.router.navigate(['login']);
        }
        else {
          console.log("Successfully Logged in.");
          if(auth.google) {
            this.afService.displayName = auth.google.displayName;
            this.afService.email = auth.google.email;
          }
          else {
            console.log(auth.auth.email);
            this.afService.displayName = auth.auth.email;
            this.afService.email = auth.auth.email;
          }
          this.isLoggedIn = true;
          this.router.navigate(['']);
        }
      }
    );
  }
  editProfile(){
    this.router.navigate(['profile']);
  }
  logout() {
    this.afService.logout();
  }
}
