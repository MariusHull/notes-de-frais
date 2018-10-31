import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  user: User;

  @Input() note: Note;

  getNote(): void {
    const id = this.route.snapshot.params._id;
    this.noteService.getNote(String(id))
      .subscribe(note => this.getNoteUser(note)
        );
  }

  getNoteUser(note: Note): void {
    this.note=note;
    let id=this.note.user;
    this.userService.getUser(String(id))
      .subscribe(user => this.user = user);
  }

  deleteNote(): void {
    if(window.confirm("Êtes-vous sûr de vouloir supprimer cette note ? Cette action est irréversible.")) 
    {
      if(this.note.status==="Non soumise"){
      this.note.status="deletedByUser";
      this.note.user="former user : " + this.note.user;
      this.note.moderator="former moderator : " +this.note.moderator;
      this.noteService.deleteNote(this.note)
      .subscribe(note => this.goBack() );
    }
    }


  }

  estNonSoumise():boolean {
    if(this.note.status==="Non soumise" || this.note.status==="Note traitée"){
      return true
    } else{ return false} 
  }

  estSoumise():boolean {
    if(this.note.status==="Soumise"){
      return true
    } else{ return false} 
  }

  goBack(): void {
    this.location.back();
  }

  postNote(): void {
    if(this.user.accountManager===""){
      window.alert("Vous ne pouvez pas soumettre de note, vous n'avez pas de gestionnaire.")
      return
    }
    if(window.confirm("Êtes-vous sûr de vouloir envoyer cette note ? Cette action est irréversible.")) 
    {
      this.note.status="Soumise";
      this.note.moderator=this.user.accountManager;
      this.note.moderatorName=this.user.accountManagerName;
      this.noteService.updateNote(this.note)
      .subscribe(note => console.log(note));
    }
  }

  estAcceptee(): boolean {
    return this.note.status==="Note acceptée !"
  }

  estRefusee(): boolean {
    return this.note.status==="Note refusée"
  }

  estEnAttente(): boolean {
    return this.note.status==="Note traitée"
  }

  constructor(private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location,
    private userService: UserService) { }

  ngOnInit() {
    this.getNote();
  }

}
