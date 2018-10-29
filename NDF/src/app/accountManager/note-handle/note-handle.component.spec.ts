import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteHandleComponent } from './note-handle.component';

describe('NoteHandleComponent', () => {
  let component: NoteHandleComponent;
  let fixture: ComponentFixture<NoteHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
