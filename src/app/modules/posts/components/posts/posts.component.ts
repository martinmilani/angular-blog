import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../../post';
import { PostsService } from '../../services/posts.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  pageOfItems: Array<any> = [];
  page_number: number = 1;
  page_size: number = 10;
  filter_value = '';
  select_value = '';

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private location: Location,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPosts(id).subscribe((posts) => (this.posts = posts));
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  handleSearch(value: string) {
    console.log(value);
    this.filter_value = value;
  }

  handleSelect(value: string) {
    console.log(value);
    this.select_value = value;
  }
}
