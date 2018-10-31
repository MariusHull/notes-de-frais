import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user';
import { AuthentificationService, UserDetails } from 'src/app/authentification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  details: UserDetails;
  users: User[];

  constructor(private userService: UserService,
    private auth: AuthentificationService,
    private route: ActivatedRoute) { }

  getRelatedUsers(id: string):void {
    this.userService.getRelatedUsers(id)
    .subscribe(users => this.users = users)
  }

  ngOnInit() {
    this.getRelatedUsers(this.route.snapshot.params._id);
  }

}
