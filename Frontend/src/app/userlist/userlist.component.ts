import { Component, inject, Input, OnInit } from '@angular/core';
import Iuser from '../interface/user.get';
import { UserService } from '../user.service';
import { RouterLink, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit{
 

 user:Iuser[]=[];

 constructor(private httpservice:UserService){}


ngOnInit(){
  this.httpservice.getUsers().subscribe({
    next: (response:Iuser[]) => {
      this.user = response;
      console.log(this.user);
    },
    error: (error) => {
      console.error('Error fetching users:', error);
    }
  })
}

}

