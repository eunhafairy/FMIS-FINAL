import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Elementary } from '../../Model/elementary';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  mainForm: FormGroup;
  //elemForm!: FormGroup;

  constructor(private fb: FormBuilder) {


    let elemForm = new FormArray([]);

    this.mainForm = this.fb.group({

      'EmployeeNumber': new FormControl(null),
      'LastName' : new FormControl(null),
      'FirstName' : new FormControl(null),
      'MI' : new FormControl(null),
      'NameExtention' : new FormControl(null),
      'birthdate' : new FormControl(null),
      'age' : new FormControl(null),
      'PlaceOfBirth' : new FormControl(null),
      'gender' : new FormControl(null),
      'CivilStatus' : new FormControl(null),
      'height' : new FormControl(null),
      'weight' : new FormControl(null),
      'BloodType' : new FormControl(null),
      'gsis' : new FormControl(null),
      'pagibig' : new FormControl(null),
      'philHealth' : new FormControl(null),
      'sss' : new FormControl(null),
      'tin' : new FormControl(null),
      'citizenship' : new FormControl(null),
      'r_zipCode' : new FormControl(null),
      'r_lotNo' : new FormControl(null),
      'r_street' : new FormControl(null),
      'r_village' : new FormControl(null),
      'r_brgy' : new FormControl(null),
      'r_city' : new FormControl(null),
      'r_province' : new FormControl(null),
      'p_zipCode' : new FormControl(null),
      'p_LotNo' : new FormControl(null),
      'p_street' : new FormControl(null),
      'p_village' : new FormControl(null),
      'p_brgy' : new FormControl(null),
      'p_city' : new FormControl(null),
      'p_province' : new FormControl(null),
      'email' : new FormControl(null),
      'altEmail' : new FormControl(null),
      'password' : new FormControl(null),
      'reEnterPassword' : new FormControl(null),
      'TelNo' : new FormControl(null),
      'MobileNo' : new FormControl(null),

      'elemForm': new FormArray([
        this.fb.group({
          'nameOfSchool' : new FormControl(null),
          'course' : new FormControl(null),
          'fromYear' : new FormControl(null),
          'TelNo' : new FormControl(null),
          'toYear' : new FormControl(null),
          'highestLevel' : new FormControl(null),
          'yearGraduated' : new FormControl(null),
          'honors' : new FormControl(null)
        })
      ])

    })

    //   this.mainForm = this.fb.group({
    //   EmployeeNumber : [''],
    //   LastName : [''],
    //   FirstName : [''],
    //   MI : [''],
    //   NameExtention : [''],
    //   birthdate : [''],
    //   age : [''],
    //   PlaceOfBirth : [''],
    //   gender : [''],
    //   CivilStatus : [''],
    //   height : [''],
    //   weight : [''],
    //   BloodType : [''],
    //   gsis : [''],
    //   pagibig : [''],
    //   philHealth : [''],
    //   sss : [''],
    //   tin : [''],
    //   citizenship : [''],
    //   r_zipCode : [''],
    //   r_lotNo : [''],
    //   r_street : [''],
    //   r_village : [''],
    //   r_brgy : [''],
    //   r_city : [''],
    //   r_province : [''],
    //   p_zipCode : [''],
    //   p_LotNo : [''],
    //   p_street : [''],
    //   p_village : [''],
    //   p_brgy : [''],
    //   p_city : [''],
    //   p_province : [''],
    //   email : [''],
    //   altEmail : [''],
    //   password : [''],
    //   reEnterPassword : [''],
    //   TelNo : [''],
    //   MobileNo : [''],


    //   elemForm : this.fb.group({

    //   nameOfSchool : [''],
    //   course : [''],
    //   fromYear : [''],
    //   toYear : [''],
    //   highestLevel : [''],
    //   yearGraduated : [''],
    //   honors : [''],

    //   })

    // })


   }

  get elemData(): FormArray{
    return this.mainForm.get('elemForm') as FormArray;
  }

  addElemData(){
    let elemArr = this.mainForm.get('elemForm') as FormArray;

    let newElemData = this.fb.group({
      'nameOfSchool' : '',
          'course' : '',
          'fromYear' : '',
          'TelNo' : '',
          'toYear' : '',
          'highestLevel' :'',
          'yearGraduated' : '',
          'honors' : ''
    });

    elemArr.push(newElemData);
  }

  removedElemData(i){
    let elemArr = this.mainForm.get('elemForm') as FormArray;
    elemArr.removeAt(i);
  }



  ngOnInit(): void {

  }

  selectedMenu: any='Personal';

  goTo(selectedTab:String){
    this.selectedMenu = selectedTab;
  }

  nextTab(event: String){
    this.selectedMenu = event;
  }

  onRegister(){
    let elemArr = this.mainForm.get('elemForm') as FormArray;

    if(this.mainForm.invalid){
      console.log("Invalid yung form");
      return;
    }

    console.log("Employee Number: "+this.mainForm.value.EmployeeNumber);
    console.log("Name of School: "+ elemArr.value[0].nameOfSchool);
  }

  onAddElem(){

  }

}
