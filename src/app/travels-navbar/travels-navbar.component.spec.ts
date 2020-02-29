import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsNavbarComponent } from './travels-navbar.component';

describe('TravelsNavbarComponent', () => {
  let component: TravelsNavbarComponent;
  let fixture: ComponentFixture<TravelsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
