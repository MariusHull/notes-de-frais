import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteModifComponent } from './note-modif.component';

describe('NoteModifComponent', () => {
  let component: NoteModifComponent;
  let fixture: ComponentFixture<NoteModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
