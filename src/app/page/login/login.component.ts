import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FacultyService } from 'src/app/Service/faculty.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading=false;
  form : FormGroup;
  constructor(private facultyService : FacultyService) {

    this.form = new FormGroup({

      'email' : new FormControl(null),
      'pw': new FormControl(null)


    })

   }

  ngOnInit(): void {
  }
  onLogin(){

    this.isLoading=true;
    if(this.form.invalid){

      return;
    }

    this.facultyService.loginUser(this.form.value.email, this.form.value.pw)
    .subscribe(
      res =>{

        console.log(res);
        this.isLoading=false;

      },
      err=>{

        window.alert(err.error['message']);
        this.isLoading=false;


      }
    );


  }
}
