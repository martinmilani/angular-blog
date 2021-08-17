import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  userId: number = 0;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private location: Location,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id === 0) {
      this.usersService.getUsers(id).subscribe((users) => (this.users = users));
    } else {
      let userArr: any[] = [];
      this.userId = id;
      this.usersService
        .getUsers(id)
        .subscribe((user: any[]) => userArr.push(user));
      this.users = userArr;
    }
  }
}
