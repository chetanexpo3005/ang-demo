import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  iLogin: Ilogin = new Ilogin();
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLogin() {
    debugger;
    if (this.iLogin.UserName === 'admin' && this.iLogin.Password === 'admin') {
      this.router.navigateByUrl('ngfor');
      localStorage.setItem('loginId', this.iLogin.UserName);
      sessionStorage.setItem('loginId', this.iLogin.UserName);
    } else {
      alert('Wrong details');
    }
  }

}

export class Ilogin {
  UserName: string;
  Password: string;
}
