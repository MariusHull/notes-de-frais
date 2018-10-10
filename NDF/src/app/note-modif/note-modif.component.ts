import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Location } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-note-modif',
  templateUrl: './note-modif.component.html',
  styleUrls: ['./note-modif.component.css']
})
export class NoteModifComponent implements OnInit {
  @Input() note: Note;

  getNote(): void {
    //console.log(this.route.snapshot.params._id);
    //const id = +this.route.snapshot.paramMap.get('_id');
    const id = this.route.snapshot.params._id;
    this.noteService.getNote(String(id))
      .subscribe(note => this.note = note);
  }

  updateNote(): void {

    this.noteService.updateNote(this.note).subscribe(note => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  constructor(private noteService: NoteService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getNote();
  }



}
