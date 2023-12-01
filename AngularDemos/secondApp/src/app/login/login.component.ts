import { Component } from '@angular/core';
import { SvcLoginService } from '../svc-login.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private svc:SvcLoginService,
              private router:Router,
              private fb:FormBuilder
  ){}

  rForm: FormGroup = this.fb.group({
    email : [null, Validators.required],
    password : [null, [Validators.required, 
    Validators.minLength(8), 
    Validators.maxLength(20)]],
    });

  public login(){
    this.svc.login(this.rForm.value.email,this.rForm.value.password)
        .subscribe((data:any)=>{localStorage.setItem("token",data.token)})
  }
    
  public showDashboard(){
    this.login()
    this.router.navigateByUrl('template/l2');

  }

}
