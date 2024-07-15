import { Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UpdateUserComponent } from './update-user/update-user.component';

export const routes: Routes = [
    {
        path: "",
        component: UserlistComponent
    },
    {
        path: "addUser",
        component: AdduserComponent
    },
    {
        path:"update/:uname",
        component: UpdateUserComponent
    }
];
