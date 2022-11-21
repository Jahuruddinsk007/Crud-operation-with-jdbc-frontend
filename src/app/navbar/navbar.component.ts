import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AddUserComponent,{width:"35%"});
    
  }


  ngOnInit(): void {
  }

}
