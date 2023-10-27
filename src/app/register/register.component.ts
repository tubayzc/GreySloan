import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MailRequest } from 'src/core/models/request/mailrequest.model';
import { PasswordRequest } from 'src/core/models/request/password-request.model';
import { RegisterRequest } from 'src/core/models/request/register-request.model';
import { ResponseStatus } from 'src/core/models/response/base-response.model';
import { ApiService } from 'src/core/services/api/api.service';
import { AuthService } from 'src/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  passwordRequest: PasswordRequest;
  public get authService(): AuthService {
    return this._authService;
  }

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

  ngOnInit(): void {
    this.register();
  }

  async register() {
    if (this.rePassword == this.registerRequest.password) {
      let status = await this.authService.register(this.registerRequest);
      if (status == ResponseStatus.Ok) {
        await this.router.navigate(['/login']);
        location.reload();
      } else if (status == ResponseStatus.Invalid)
        this.registerRequest.password = '';
      this.passwordResponse = '';
    } else {
      this.passwordResponse = 'Şifreler uyuşmuyor veya resim eklenemedi.';
    }
  }
}
