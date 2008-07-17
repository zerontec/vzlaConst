import { Component, OnInit } from '@angular/core';

import {User} from '../../models/user.interface';
import { Observable } from 'rxjs';
import {AuthService} from '../../../auth/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  private image: any;
  constructor(private  authS: AuthService, private routers: Router ) { }

  ngOnInit() {
  }




  async onLogout() {
    try {
      await this.authS.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }


}
