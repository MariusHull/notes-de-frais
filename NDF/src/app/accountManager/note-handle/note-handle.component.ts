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

  constructor(private route: ActivatedRoute,
  private noteService: NoteService,
  private location: Location,
  private userService: UserService) { }

  getNote(): void {
    const id = this.route.snapshot.params.id;
    this.noteService.getNote(String(id))
      .subscribe(note => this.note=note);
  }

  askdetails(): void {
    this.note.status="Note traitée";
    this.updateNote();
  }

  refuseNote(): void {
    this.note.status="Note refusée";
    this.updateNote();
  }

  acceptNote(): void {
    this.note.status="Note acceptée !";
    this.updateNote();
  }

  updateNote(): void {
    this.noteService.updateNote(this.note)
    .subscribe(note => console.log(note));
  }

  ngOnInit() {
    this.getNote();
  }

}
