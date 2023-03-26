import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './components/cv/cv.component';


@NgModule({
  declarations: [
    CvComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule
  ]
})
export class CvModule { }
