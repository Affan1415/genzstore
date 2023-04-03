import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackmyorderComponent } from './trackmyorder.component';

describe('TrackmyorderComponent', () => {
  let component: TrackmyorderComponent;
  let fixture: ComponentFixture<TrackmyorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackmyorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackmyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
