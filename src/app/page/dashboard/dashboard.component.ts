import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddSchoolComponent } from 'src/app/elements/dialog-add-school/dialog-add-school.component';
import { FacultyService } from 'src/app/Service/faculty.service';
import {Faculty} from '../../Model/faculty'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  faculty : any;
  isLoading = false;
  name:string;
  id:string;
  age:string;

  constructor(private userService: FacultyService,private dialog : MatDialog ) { }

  ngOnInit(): void {

    this.isLoading=true;
    this.id = this.userService.getUserId();
    this.userService.getUser(this.id)
    .subscribe(res=>{
      this.isLoading=false;

      this.faculty = res;


    })


  }

  openAddSchoolDialog(){
    const dialogRef = this.dialog.open(DialogAddSchoolComponent, {
      data: this.userService.getUserId()
    });

    dialogRef.afterClosed().subscribe(result => {
      //after closing dialog, refresh the table

    });


  }

  logout(){

    this.userService.logout();

  }

}
