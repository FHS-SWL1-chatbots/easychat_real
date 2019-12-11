import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernamehistoryComponent } from './usernamehistory.component';

describe('UsernamehistoryComponent', () => {
  let component: UsernamehistoryComponent;
  let fixture: ComponentFixture<UsernamehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernamehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernamehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
