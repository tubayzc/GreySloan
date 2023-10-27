import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/core/models/request/login-request.model';
import { MailRequest } from 'src/core/models/request/mailrequest.model';
import { PasswordRequest } from 'src/core/models/request/password-request.model';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  public loginRequest: LoginRequest = <LoginRequest>{};
  public registerRequest: RegisterRequest = <RegisterRequest>{};
  public rePassword: string = '';
  public passwordResponse: string = '';
  mail!: MailRequest;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly apiService: ApiService
  ) {
    this.mail = new MailRequest();
    this.passwordRequest = new PasswordRequest();
  }
  passwordRequest!: PasswordRequest;

  async changePassword() {
    this.passwordRequest!.email = this.mail.recepients?.toString();
    let status = await this.apiService
      .changePassword(this.passwordRequest)
      .then((response) => response?.status);
  }
}
