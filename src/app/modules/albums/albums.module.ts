import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './components/albums/albums.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

import { MaterialModule } from '../material/material.module';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';

@NgModule({
  declarations: [AlbumsComponent, GalleryComponent, ImageDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    PipesModule,
  ],
  exports: [AlbumsComponent],
})
export class AlbumsModule {}
