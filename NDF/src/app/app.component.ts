import { Component } from '@angular/core';
import { AuthentificationService } from './authentification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public auth: AuthentificationService) {}


}
