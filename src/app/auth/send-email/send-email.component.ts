import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../service/auth.service';

import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.interface';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit, OnDestroy {

  public user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService) { }

  onSendEmail(): void {
    this.authSvc.sendVerificationEmail();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.authSvc.logout();
  }

}
