import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileModifComponent } from './profile-modif.component';

describe('ProfileModifComponent', () => {
  let component: ProfileModifComponent;
  let fixture: ComponentFixture<ProfileModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
