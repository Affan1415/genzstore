import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  displaymsg: string = '';
  iscreated: boolean= false;


  ngOnInit(): void {
  }

  signup() {
    console.log(this.registerform.value);

    const userData: string[] = [
      String(this.registerform.value.email),
      String(this.registerform.value.username),
      String(this.registerform.value.pwd),
      String(this.registerform.value.rpwd)
    ];


    this.authService.registeruser(userData)
    .subscribe((res) => {

      if(res == "success")
      {
        this.displaymsg = "Account created succesfully!!!";
        this.iscreated = true;
      }
      else if(res == "Already Exists!!")
      {
        this.displaymsg = "Already Exists!!";
        this.iscreated = false;
      }
      else{
        this.displaymsg = "something went wrong";
        this.iscreated = false;
      }



    });
  }

  registerform = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    pwd: new FormControl(''),
    rpwd: new FormControl('')
  });

  get username(): FormControl {
    return this.registerform.get('username') as FormControl;
  }
  get email(): FormControl {
    return this.registerform.get('email') as FormControl;
  }
  get pwd(): FormControl {
    return this.registerform.get('pwd') as FormControl;
  }
  get rpwd(): FormControl {
    return this.registerform.get('rpwd') as FormControl;
  }
}
