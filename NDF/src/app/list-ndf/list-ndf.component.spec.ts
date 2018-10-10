import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNDFComponent } from './list-ndf.component';

describe('ListNDFComponent', () => {
  let component: ListNDFComponent;
  let fixture: ComponentFixture<ListNDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
