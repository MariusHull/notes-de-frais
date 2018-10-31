import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { Location } from '@angular/common';
import { AuthentificationService, UserDetails } from '../authentification.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: UserDetails;
  user: User;

  constructor(private noteService: NoteService,
  private location: Location,
  private auth: AuthentificationService,
  private userService: UserService) { }

  hasAccMan(): boolean {
    return this.details.accountManagerName!==""
  }

  getUser(id: string): void {
    this.userService.getUser(id)
    .subscribe(user => this.user= user);
  }

  ngOnInit() { 
    this.details=this.auth.getUserDetails();  
    this.getUser(this.details._id);
  }

}
