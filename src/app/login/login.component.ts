import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginAuth: AuthService) {

  }
  isvalid: boolean = false
  ngOnIni(): void
  { 

  }

  loginsubmitted()
  {
    const userData: string[] = [
      String(this.loginForm.value.username),
      String(this.loginForm.value.pwd),
    ];


    this.loginAuth.loginuser(userData)
    .subscribe((res) =>{
      if(res == 'failure')
      {
        this.isvalid = false
        alert('Login failed')
      }
      else {
        this.isvalid = true
        alert('Login successful')
      }
    });
  }

  loginForm = new FormGroup({
    username: new FormControl("",[Validators.required,]),
    pwd: new FormControl("",[Validators.required,
    Validators.maxLength(15),
  Validators.minLength(6)])
  });

  get username(): FormControl{
    return this.loginForm.get('username') as FormControl;
  }
  get pwd(): FormControl{
    return this.loginForm.get('pwd') as FormControl;
  }
}
