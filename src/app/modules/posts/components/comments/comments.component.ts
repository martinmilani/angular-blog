import { Component, OnInit } from '@angular/core';
import { Comment } from '../../comments';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommentsService } from '../../services/comments.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(
    private commentsService: CommentsService,
    private route: ActivatedRoute,
    private location: Location,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.commentsService
      .getComments(id)
      .subscribe((comments) => (this.comments = comments));
  }
}
