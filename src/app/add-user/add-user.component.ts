import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();
  
  constructor(private userService:UserService, private dialogRef:MatDialogRef<DialogRef>) { }

  ngOnInit(): void {
  }

  createUser(){
    this.userService.saveUser(this.user).subscribe(data =>{
      console.log(data);
      Swal.fire('User Successfully Added !!');
      this.dialogRef.close();
    }, error => console.log(error));
  }

  

  onSubmit(){
    console.log(this.user);
    this.createUser();
  }

}
