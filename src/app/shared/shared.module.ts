import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule
  ]
})
export class SharedModule { }
