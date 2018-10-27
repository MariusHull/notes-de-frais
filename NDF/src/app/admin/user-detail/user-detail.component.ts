import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;

  getUser(): void {
    //console.log(this.route.snapshot.params._id);
    //const id = +this.route.snapshot.paramMap.get('_id');
    const id = this.route.snapshot.params._id;
    this.userService.getUser(String(id))
      .subscribe(user => this.user = user);
  }

  hasAccMan(): boolean {
    return this.user.accountManagerName!==""
}

updateAccountType(type : string): void {
  if(window.confirm("Êtes-vous sûr de vouloir modifier le type du compte ?")) 
  {
    this.user.accountType=type;
    this.userService.updateUser(this.user)
    .subscribe(user => console.log(user));
  }
}

  goBack(): void {
    this.location.back();
  }

  constructor(private userService: UserService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();
  }

}
