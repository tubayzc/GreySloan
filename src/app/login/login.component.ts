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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public get authService(): AuthService {
    return this._authService;
  }

  public loginRequest: LoginRequest = <LoginRequest>{};
  public registerRequest: RegisterRequest = <RegisterRequest>{};
  public rePassword: string = '';
  public passwordResponse: string = '';
  mail!: MailRequest;

  constructor(
    private readonly _authService: AuthService,
    private readonly router: Router,
    private readonly apiService: ApiService
  ) {
    this.mail = new MailRequest();
    this.passwordRequest = new PasswordRequest();
  }

  passwordRequest!: PasswordRequest;

  async ngOnInit(): Promise<void> {
    console.log('login component çalıştı');
    //Mesaj gönderme
  }

  async login() {
    let status = await this.authService.login(this.loginRequest);

    if (status == ResponseStatus.Ok) {
      await this.router.navigate(['home']);
      location.reload();
    } else if (status == ResponseStatus.Invalid) {
      this.loginRequest.password = '';
    }
   
  }
  
}
