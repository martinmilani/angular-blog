import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../photo';
import { GalleryService } from '../../services/gallery.service';

import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { LoaderService } from 'src/app/services/loader.service';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  photos: Photo[] = [];
  pageOfItems: Array<any> = [];
  page_number: number = 1;
  page_size: number = 10;

  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.galleryService
      .getPhotos(id)
      .subscribe((photos) => (this.photos = photos));
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  openDialog(url: string) {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      data: { photoUrl: url },
    });
  }

  delete(photo: Photo): void {
    this.photos = this.photos.filter((p) => p !== photo);
    /* this.galleryService.deletePhoto(photo.id).subscribe(); */
  }
}
