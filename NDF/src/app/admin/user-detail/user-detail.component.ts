import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { Location } from '@angular/common';
import { AuthentificationService, UserDetails } from '../../authentification.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  details: UserDetails;
  accMans: User[];
  choosing= false;

  isMe(): boolean {
    return this.user._id===this.details._id
  }

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
  if(this.isMe()){
    window.alert("Vous ne pouvez pas changer le type de votre propre compte, demandez à un autre administrateur.")
    return
  }
  else if(window.confirm("Êtes-vous sûr de vouloir modifier le type du compte ?")) 
  {
    this.user.accountType=type;
    this.userService.updateUser(this.user)
    .subscribe(user => console.log(user));
  }
}

  goBack(): void {
    this.location.back();
  }

  chooseAccMan():void {
    this.choosing = true;
    this.userService.getAccManagers()
    .subscribe(accMans => this.accMans = accMans)
  }

  chosenAccMan(accMan : User): void {
    if(window.confirm("Êtes-vous sûr de vouloir choisir ce gestionnaire ?")&&accMan._id!==this.user._id) 
  {
    this.user.accountManagerName = accMan.name;
    this.user.accountManager = accMan._id;
    this.userService.updateUser(this.user)
    .subscribe(user => this.choosing = false);
  }
  }


  constructor(private userService: UserService,
    private location: Location,
    private route: ActivatedRoute,
    private auth: AuthentificationService) { }

  ngOnInit() {
    this.getUser();
    this.details = this.auth.getUserDetails();
  }

}
