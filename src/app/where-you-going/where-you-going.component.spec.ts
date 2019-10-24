import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereYouGoingComponent } from './where-you-going.component';

describe('WhereYouGoingComponent', () => {
  let component: WhereYouGoingComponent;
  let fixture: ComponentFixture<WhereYouGoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereYouGoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereYouGoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
