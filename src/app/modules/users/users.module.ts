import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [UsersComponent],
})
export class UsersModule {}
