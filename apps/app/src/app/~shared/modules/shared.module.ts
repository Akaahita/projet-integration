import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const DECLARATIONS: any[] = [];

const MODULES = [ReactiveFormsModule, FormsModule, RouterModule];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, ...MODULES],
  exports: [...DECLARATIONS, ...MODULES]
})
export class SharedModule {}
