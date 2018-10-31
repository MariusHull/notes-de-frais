import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../../note';
import { NoteService } from '../../note.service';
import { Location } from '@angular/common';
import { UserService } from '../../user.service';
import { User } from '../../user';

@Component({
  selector: 'app-note-handle',
  templateUrl: './note-handle.component.html',
  styleUrls: ['./note-handle.component.css']
})
export class NoteHandleComponent implements OnInit {
  user: User;
  note: Note;
  motif:string;

  constructor(private route: ActivatedRoute,
  private noteService: NoteService,
  private location: Location,
  private userService: UserService) { }

  getNote(): void {
    const id = this.route.snapshot.params.id;
    this.noteService.getNote(String(id))
      .subscribe(note => this.note=note);
  }

  askDetails(): void {
    if(window.confirm("Etes-vous sur de vouloir demander des détails ? ")){
    this.note.status="Note traitée";
    this.updateNote();
    this.location.back();
  }
  }

  refuseNote(): void {
    if(window.confirm("Voulez-vous vraiment refuser cette note ? ")){
    this.note.status="Note refusée";
    this.updateNote();
    this.location.back();
  }
  }

  acceptNote(): void {
    if(window.confirm("Voulez-vous vraiment accepter cette note ? ")){
    this.note.status="Note acceptée !";
    this.updateNote();
    this.location.back();
  }
  }

  updateNote(): void {
    this.noteService.updateNote(this.note)
    .subscribe(note => console.log(note));
  }

  ngOnInit() {
    this.getNote();
  }

}
