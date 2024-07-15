import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Iuser from './interface/user.get';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient){}
  

  getUsers():Observable<Iuser[]>{
    return this.http.get<Iuser[]>("https://localhost:7089/getUser")
  }
  postUSers(user:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>("https://localhost:7089/post",user)
  }
  updateUSers(uname:string,updatedUser:Iuser):Observable<Iuser>{
    return this.http.put<Iuser>(`https://localhost:7089/putuser/${uname}`,updatedUser)
  }
  getSingleUser(uname: string):Observable<Iuser[]> {
    return this.http.get<Iuser[]>(`https://localhost:7089/getUser/${uname}`)
  }
  deleteUser(uname:string):Observable<Iuser[]> {
    return this.http.delete<Iuser[]>(`https://localhost:7089/deleteuser/${uname}`)
  }
}
