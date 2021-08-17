import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../../album';
import { AlbumsService } from '../../services/albums.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  pageOfItems: Array<any> = [];
  page_number: number = 1;
  page_size: number = 10;

  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService
      .getAlbums(id)
      .subscribe((albums) => (this.albums = albums));
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
}
