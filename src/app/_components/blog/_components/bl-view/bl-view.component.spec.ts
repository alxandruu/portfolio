import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlViewComponent } from './bl-view.component';

describe('BlViewComponent', () => {
  let component: BlViewComponent;
  let fixture: ComponentFixture<BlViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
