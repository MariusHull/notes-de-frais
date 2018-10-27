import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  @Input() note: Note;

  getNote(): void {
    //console.log(this.route.snapshot.params._id);
    //const id = +this.route.snapshot.paramMap.get('_id');
    const id = this.route.snapshot.params._id;
    this.noteService.getNote(String(id))
      .subscribe(note => this.note = note);
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
    if(this.note.status==="Non soumise"){
      return true
    } else{ return false} 
  }

  goBack(): void {
    this.location.back();
  }

  postNote(): void {
    if(window.confirm("Êtes-vous sûr de vouloir envoyer cette note ? Cette action est irréversible.")) 
    {
      this.note.status="Soumise";
      this.noteService.updateNote(this.note)
      .subscribe(note => console.log(note));
    }
  }

  constructor(private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location) { }

  ngOnInit() {
    this.getNote();
  }

}
