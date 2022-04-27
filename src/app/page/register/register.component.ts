import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormArray, FormBuilder } from '@angular/forms';
import { FacultyService } from 'src/app/Service/faculty.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  mainForm: FormGroup;
  fileTitleProfilePic: string;
  fileTitleProfilePicPrev: string;
  //elemForm!: FormGroup;

  constructor(private fb: FormBuilder, private facultyService: FacultyService) {

    this.mainForm = this.fb.group({

      'profilePic': new FormControl(null),
      'EmployeeNumber': new FormControl(null),
      'LastName' : new FormControl(null),
      'FirstName' : new FormControl(null),
      'MidInit' : new FormControl(null),
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
      'MobileNo' : new FormControl(null)

    })

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



    this.facultyService.addFaculty(
      this.mainForm.value.profilePic,
      this.mainForm.value.EmployeeNumber,
      this.mainForm.value.LastName,
      this.mainForm.value.FirstName,
      this.mainForm.value.MidInit,
      this.mainForm.value.NameExtention,
      this.mainForm.value.birthdate,
      this.mainForm.value.age,
      this.mainForm.value.PlaceOfBirth,
      this.mainForm.value.gender,
      this.mainForm.value.CivilStatus,
      this.mainForm.value.height,
      this.mainForm.value.weight,
      this.mainForm.value.BloodType,
      this.mainForm.value.gsis,
      this.mainForm.value.pagibig,
      this.mainForm.value.philHealth,
      this.mainForm.value.sss,
      this.mainForm.value.tin,
      this.mainForm.value.citizenship,
      this.mainForm.value.r_zipCode,
      this.mainForm.value.r_lotNo,
      this.mainForm.value.r_street,
      this.mainForm.value.r_village,
      this.mainForm.value.r_brgy,
      this.mainForm.value.r_city,
      this.mainForm.value.r_province,
      this.mainForm.value.p_zipCode,
      this.mainForm.value.p_lotNo,
      this.mainForm.value.p_street,
      this.mainForm.value.p_village,
      this.mainForm.value.p_brgy,
      this.mainForm.value.p_city,
      this.mainForm.value.p_province,
      this.mainForm.value.email,
      this.mainForm.value.altEmail,
      this.mainForm.value.password,
      this.mainForm.value.TelNo,
      this.mainForm.value.MobileNo



    ).subscribe(res => {
      console.log(res)
      window.alert('success');

    },
    error=>{
      console.log(error)
      window.alert('Error! See console'+error);
    });
  }

  onAddElem(){

  }


  onFilePickedProfilePic(event: Event){

      const file = (event.target as HTMLInputElement).files[0];
      this.fileTitleProfilePic = file.name;
      this.mainForm.patchValue({profilePic: file});
      this.mainForm.get('profilePic').updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () =>{
          this.fileTitleProfilePicPrev = reader.result as string;
      }
      reader.readAsDataURL(file);


    }

}
