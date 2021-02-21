import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup
  appState = 'off'

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email, 
        Validators.required,
        MyValidators.restrictedEmails
      ], MyValidators.uniqEmail),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([], {updateOn: 'blur'})
    })
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submitted ', this.form)
      const formData = {...this.form.value}
      console.log(formData)
      this.form.reset()
    }
  }

  chooseCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск',  
    } 
    const city = cityMap[this.form.get('address').get('country').value] 
    this.form.patchValue({address: {city}})
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control)
  }

  getSkills() {
    return (this.form.get('skills') as FormArray).controls     
  }
}
