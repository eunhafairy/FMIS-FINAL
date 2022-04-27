import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, throwError } from 'rxjs';
import { serializeError } from 'serialize-error';
import {School} from '../Model/school'
@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private schools: School[] = [];
private schoolsUpdated = new Subject<{schools: School []}>();
  constructor(private http: HttpClient) { }

  getRequests(){

    this.http
    .get<{message: string, requests: any, maxRequests: number}>("http://localhost:3000/api/requests")
    .subscribe((res) => {

        //this.schools = res;
        console.log("get kools " + res);



        this.schoolsUpdated.next({
          schools : [...this.schools]
        });
    });

  }


  getRequestUpdateListener(){
    return this.schoolsUpdated.asObservable();
  }

  //school.service.ts 
  addSchool
    ( nameOfSchool: string,   course: string,  fromYear: string,   toYear: string,
    highestLevel:string, yearGraduated:string, honors: string,  type:string,  user_id:string ){

    //create formdata

    let reqData = new FormData();
    reqData.append("nameOfSchool", nameOfSchool);
    reqData.append("course", course);
    reqData.append("fromYear", fromYear);
    reqData.append("toYear", toYear);
    reqData.append("highestLevel", highestLevel);
    reqData.append("yearGraduated", yearGraduated);
    reqData.append("honors", honors);
    reqData.append("type", type);
    reqData.append("user_id", user_id);

    //create post request
    return this.http.post("http://localhost:3000/api/schools", reqData)
    .pipe(catchError(this.handleError));

  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was:` , error.error);

    }
    // Return an observable with a user-facing error message.
    const serialized = serializeError(error.error);
    return throwError(() => new Error(serialized.error.message));
  }
}
