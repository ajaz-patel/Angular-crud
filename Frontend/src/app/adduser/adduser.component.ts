import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormsModule, MaxValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import Iuser from '../interface/user.get';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
 frombuilder=inject(FormBuilder);
 service = inject(UserService)
 router = inject(Router)
 userform=this.frombuilder.group({
   userName:['',[Validators.required]],
   password:['',[Validators.required]]
 }
 )
 onSubmit(){
  console.log(this.userform.value)
  const newUser: Iuser = {
    userName: this.userform.value.userName!,
    password: this.userform.value.password!
  }
  this.service.postUSers(newUser).subscribe({
    next: (response) => {
      
      console.log(response);
      this.router.navigateByUrl("")
      
    },
    error: (error) => {
      console.log(error);
      
    }
  })
 }
}
