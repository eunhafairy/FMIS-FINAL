import { Faculty } from "../Model/faculty";
import { HttpClient, HttpErrorResponse, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { School } from "../Model/school";
import { Injectable, OnInit } from "@angular/core";
import { map, Subject } from "rxjs";
import { FormBuilder, FormGroup, Form } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';

import {serializeError} from 'serialize-error';
import { Router } from "@angular/router";



@Injectable({ providedIn: "root" })
export class FacultyService implements OnInit{
  private faculty: Faculty[] = [];
  private facultyUpdated = new Subject<Faculty[]>();
  token: string;
  status: string;
  u_id: string;
  tokenTimer : any;
  role: string;
  isAuthenticated: boolean;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router){

  }

  ngOnInit(): void {

  }

  // getFacultyData() {
  //   this.http.get<{message: string, faculty: Faculty[]}>('http://localhost:3000/api/faculty')
  //   .subscribe((facultyData) => {
  //       this.faculty = facultyData.faculty;
  //       this.facultyUpdated.next([...this.faculty]);
  //   });
  // }

  addFaculty(
    profilePic: File,
    EmployeeNumber: string,
    LastName: string,
    FirstName: string,
    MI: string,
    NameExtention: string,
    birthdate: string,
    age: string,
    PlaceOfBirth: string,
    gender: string,
    CivilStatus: string,
    height: string,
    weight: string,
    BloodType: string,
    gsis: string,
    pagibig: string,
    philHealth: string,
    sss: string,
    tin: string,
    citizenship: string,
    r_zipCode: string,
    r_lotNo: string,
    r_street: string,
    r_village: string,
    r_brgy: string,
    r_city: string,
    r_province: string,
    p_zipCode: string,
    p_LotNo: string,
    p_street: string,
    p_village: string,
    p_brgy: string,
    p_city: string,
    p_province: string,
    email: string,
    altEmail: string,
    password: string,
    TelNo: string,
    MobileNo: string,

  ){

  //   const facultyData :Faculty = {

  //     user_id: null,
  //     EmployeeNumber: EmployeeNumber,
  // LastName: LastName,
  // FirstName: FirstName,
  // MI: MI,
  // NameExtention: NameExtention,
  // birthdate: birthdate,
  // age: age,
  // PlaceOfBirth: PlaceOfBirth,
  // gender: gender,
  // CivilStatus: CivilStatus,
  // height: height,
  // weight: weight,
  // BloodType: BloodType,
  // gsis: gsis,
  // pagibig: pagibig,
  // philHealth: philHealth,
  // sss: sss,
  // tin: tin,
  // citizenship: citizenship,
  // r_zipCode: r_zipCode,
  // r_lotNo: r_lotNo,
  // r_street: r_street,
  // r_village: r_village,
  // r_brgy: r_brgy,
  // r_city: r_city,
  // r_province: r_province,
  // p_zipCode: p_zipCode,
  // p_LotNo: p_LotNo,
  // p_street: p_street,
  // p_village: p_village,
  // p_brgy: p_brgy,
  // p_city: p_city,
  // p_province: p_province,
  // password: password,
  // TelNo: TelNo,
  // MobileNo: MobileNo,
  // email:email,
  // altEmail: altEmail


  //   }
  const facultyDataForm = new FormData();
   // facultyDataForm.append('profilPic', profilePic , profilePic.name);
    facultyDataForm.append("emp", EmployeeNumber);
    facultyDataForm.append('LastName', LastName);
    facultyDataForm.append('FirstName', FirstName);
    facultyDataForm.append('MI', MI);
    facultyDataForm.append('NameExtention', NameExtention);
    facultyDataForm.append('birthdate', birthdate);
    facultyDataForm.append('age', age);
    facultyDataForm.append('PlaceOfBirth', PlaceOfBirth);
    facultyDataForm.append('gender', gender);
    facultyDataForm.append('CivilStatus', CivilStatus);
    facultyDataForm.append('height', height);
    facultyDataForm.append('weight', weight);
    facultyDataForm.append('BloodType', BloodType);
    facultyDataForm.append('gsis', gsis);
    facultyDataForm.append('pagibig', pagibig);
    facultyDataForm.append('philHealth', philHealth);
    facultyDataForm.append('sss', sss);
    facultyDataForm.append('tin', tin);
    facultyDataForm.append('citizenship', citizenship);
    facultyDataForm.append('r_zipCode', r_zipCode);
    facultyDataForm.append('r_lotNo', r_lotNo);
    facultyDataForm.append('r_street', r_street);
    facultyDataForm.append('r_village', r_village);
    facultyDataForm.append('r_brgy', r_brgy);
    facultyDataForm.append('r_city', r_city);
    facultyDataForm.append('r_province', r_province);
    facultyDataForm.append('p_zipCode', p_zipCode);
    facultyDataForm.append('p_LotNo', p_LotNo);
    facultyDataForm.append('p_street', p_street);
    facultyDataForm.append('p_village', p_village);
    facultyDataForm.append('p_brgy', p_brgy);
    facultyDataForm.append('p_city', p_city);
    facultyDataForm.append('p_province', p_province);
    facultyDataForm.append('email', email);
    facultyDataForm.append('altEmail', altEmail);
    facultyDataForm.append('password', password);
    facultyDataForm.append('TelNo', TelNo);
    facultyDataForm.append('MobileNo', MobileNo);

    return this.http.post("http://localhost:3000/api/users/register",facultyDataForm )
        .pipe( catchError(this.handleError));

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

  getUser(id:string){
    return this.http.get("http://localhost:3000/api/users/find/" + id)
    .pipe(catchError(this.handleError));

  }


  //LOGIN

  //------------LOGIN USER ----------------------
  loginUser(email:string, password: string) : Observable<any>{


    const authData : any = {

      email:email,
      password: password

    };

    return this.http.post<{token:string, expiresIn: number, u_id: string, role:string, status: string}>("http://localhost:3000/api/users/login", authData)
    .pipe( map(response =>{

      const token = response.token;
      console.log("My token:" + token )
      this.setToken(token);
      if(token){


        this.status = response.status;
        this.u_id = response.u_id;
        this.role = response.role;
        const expiresInDuration  = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration *1000);
        this.saveAuthData(token, expirationDate, this.u_id, this.role , this.status);
        this.isAuthenticated = true;
        this.authStatusListener.next(true);


        //GO TO A PAGE BASE ON ROLE
        // console.log("Success!");
        //  if(this.role === 'Admin'){
        //   this.router.navigate(['/admin-dashboard']);
        // }
        // else if (this.role === 'Student'){

        //   this.router.navigate(['/dashboard']);
        // }
        // else{

        //   this.router.navigate(['/dashboard']);
        // }

        this.router.navigate(['/dashboard']);
       }},
       catchError(this.handleError)));




  }

  getUserId(){
    return this.u_id;

  }
  getRole(){
    return this.role;

  }
  setToken(token: string){

    this.token = token;
  }

  setUID(id:string){
    this.u_id = id;
  }

  setRole(role:string){
    this.role = role;
  }



  getAuth(){
    return this.isAuthenticated;
  }

  getToken(){
    return this.token;
  }

  logout(){
      this.token = null;
      this.isAuthenticated = false;
      this.authStatusListener.next(false);
      this.router.navigate(['/login']);
      this.clearAuthData();
      clearTimeout(this.tokenTimer);
      this.role = null;
      this.u_id = null;

  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  saveAuthData(token: string, expirationDate: Date, u_id: string, role:string, status: string){

    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
    localStorage.setItem('u_id', u_id);
    localStorage.setItem('role', role);
    localStorage.setItem('status', status);

  }

  private clearAuthData(){

    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("u_id");
    localStorage.removeItem("role");
    localStorage.removeItem('status');

  }

  autoAuthUser(){

    const authInformation = this.getAuthData();
    console.log(authInformation);
    if(!authInformation){
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if(expiresIn > 0){

      this.token = authInformation.token;
      this.u_id = authInformation.u_id;
      this.role = authInformation.role;
      this.status = authInformation.status;
      this.setAuthTimer(expiresIn/1000);
      this.isAuthenticated = true;
      this.authStatusListener.next(true);

    }


  }



  private getAuthData(){
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    const u_id = localStorage.getItem('u_id');
    const role = localStorage.getItem('role');
    const status = localStorage.getItem('status');

    if(!token || !expirationDate){
      return null;
    }

    return {

        token: token,
        expirationDate : new Date(expirationDate),
        u_id: u_id,
        role: role,
        status: status

      };



  }

  setAuthTimer(duration: number){

    this.tokenTimer = setTimeout(() =>{
      this.logout();

    }, duration * 1000);

  }





}


