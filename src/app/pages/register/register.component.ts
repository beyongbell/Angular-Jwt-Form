import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '@service/auth.service';
import { User } from '@interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData: User;

  constructor(private auth: AuthService, private router: Router) { }

  @HostListener('window:keydown.enter') spaceEvent() {
    this.registerUser();
  }

  ngOnInit() {
    this.registerUserData = { email: '', password: ''};
  }

  registerUser() {
    this.auth.registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/special']);
      },
      err => console.log(err)
    );
  }
}
