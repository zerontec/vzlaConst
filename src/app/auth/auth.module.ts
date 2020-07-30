import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './service/user.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './service/auth.service';
import { SendEmailComponent } from './send-email/send-email.component';



@NgModule({
  declarations: [RegisterComponent, LoginComponent,
    SendEmailComponent],
  imports: [
    CommonModule
  ],
  providers: [UserService, AuthService],
  exports: [

  ],
})
export class AuthModule { }
