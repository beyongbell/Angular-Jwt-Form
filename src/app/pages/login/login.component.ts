import { Component, OnInit } from '@angular/core';
import { User } from '@interface/user';
import { AuthService } from '@service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData: User;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginUserData = { email: '', password: ''};
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/special']);
      },
      err => console.log(err)
    );
  }
}
