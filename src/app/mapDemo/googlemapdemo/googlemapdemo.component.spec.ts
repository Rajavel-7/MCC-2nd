import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglemapdemoComponent } from './googlemapdemo.component';

describe('GooglemapdemoComponent', () => {
  let component: GooglemapdemoComponent;
  let fixture: ComponentFixture<GooglemapdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglemapdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglemapdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
