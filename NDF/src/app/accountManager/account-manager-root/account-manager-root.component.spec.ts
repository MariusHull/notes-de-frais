import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountManagerRootComponent } from './account-manager-root.component';

describe('AccountManagerRootComponent', () => {
  let component: AccountManagerRootComponent;
  let fixture: ComponentFixture<AccountManagerRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountManagerRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountManagerRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
