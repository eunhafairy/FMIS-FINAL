import { Component } from '@angular/core';
import { FacultyService } from './Service/faculty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private facultyService: FacultyService ) {


    this.facultyService.autoAuthUser();

  }





}
