import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SampleReactiveFormsComponent } from './components/sample-reactive-forms/sample-reactive-forms.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        SampleReactiveFormsComponent,
        DynamicFormsComponent,
        FileUploadComponent,
    ],
    imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
