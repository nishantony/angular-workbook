import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-sample-reactive-forms',
    templateUrl: './sample-reactive-forms.component.html',
    styleUrls: ['./sample-reactive-forms.component.css'],
})
export class SampleReactiveFormsComponent {
    signupForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.signupForm = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
        });
    }

    get signupControls() {
        return this.signupForm.controls;
    }

    onSubmit() {
        let data = {
            fname: this.signupForm.value.firstName,
            lname: this.signupForm.value.lastName,
            email: this.signupForm.value.email,
        };
        console.log(data);
    }
}
