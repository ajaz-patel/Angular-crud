import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userName: string = '';
  password: string = '';
  uname: string | null = '';

  route = inject(ActivatedRoute);
  service = inject(UserService);
  router = inject(Router)

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.uname = params.get('uname');
        if (this.uname !== null) {
          this.service.getSingleUser(this.uname).subscribe({
            next: (res) => {
              this.userName = res[0].userName;  
              this.password = res[0].password;   
            },
            error: (error) => {
              console.log(error);
            }
          });
        }
      }
    });
  }

  onSubmit() {
    if (this.uname) {
      const updatedUserData = {
        userName: this.userName,
        password: this.password
      };

      this.service.updateUSers(this.uname, updatedUserData).subscribe({
        next: (res) => {
          console.log('User updated successfully:', res);
          this.router.navigateByUrl("")
        },
        error: (error) => {
          console.error('Error updating user:', error);
        }
      });
    }
  }

  onDelete() {
    if (this.uname) {
      this.service.deleteUser(this.uname).subscribe({
        next: (res) => {
          console.log('User deleted successfully:', res);
          this.router.navigateByUrl("")
        },
        error: (error) => {
          console.error('Error deleting user:', error);
        }
      });
    }
  }
}
