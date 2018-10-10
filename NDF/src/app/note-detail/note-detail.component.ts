import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note';
import { NoteService } from '../note.service';

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
      this.note.status="deletedByUser";
      this.note.user="former user : " + this.note.user;
      this.note.moderator="former moderator : " +this.note.moderator;
      this.noteService.deleteNote(this.note)
      .subscribe(note => console.log(note));
    }


  }


  

  constructor(private route: ActivatedRoute,
    private noteService: NoteService) { }

  ngOnInit() {
    this.getNote();
  }

}
