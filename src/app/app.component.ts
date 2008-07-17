import { Component } from '@angular/core';
import { fadeAnimation } from './shared/animations/fadeIntRoute';
import { UserService } from './auth/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'Venezuela Construction';
  userService: any;


constructor(authService: AuthService, userService: UserService, route: ActivatedRoute, router: Router) {

  


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
  }

}

setGeoLocation(position: any) {
  this.userService.setLocation(
    position.coords.latitude,
    position.coords.longitude
  );
}


// tslint:disable-next-line: use-lifecycle-interface
ngOnInit() {
  

}


}
