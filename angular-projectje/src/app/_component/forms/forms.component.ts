import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  formGegevens !: FormGroup;

  constructor(
    private formBuilder: FormBuilder) 
    {}

  ngOnInit(): void {
    console.log("initiate")
    this.formGegevens = this.formBuilder.group({
      'Naam':['', Validators.required],
      'Voornaam':['', Validators.required],
      //'Tel':['', Validators.pattern("[0-9]")],
      'Email':['', Validators.email]
    })
  }

  onSubmit(){
    console.log("SUBMIT")
    //validating inputfields before all other actions
    if (this.formGegevens.invalid){
      console.log("NOT Valid")
      return;
    }
    console.log("Valid form")
  }

}
