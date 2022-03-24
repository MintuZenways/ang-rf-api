import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  submitted = false; 
  
  
 // strPattern = "^[a-z]+$";
  constructor(private fb: FormBuilder) { }
  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^[a-z]+$/)]],
    
  });
  ngOnInit(): void {
    
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
 afterSubmit(){
this.submitted = true;
if(this.form.invalid){
return;
}
alert(JSON.stringify(this.form.value));
  }


}
