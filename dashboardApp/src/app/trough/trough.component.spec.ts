import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroughComponent } from './trough.component';

describe('TroughComponent', () => {
  let component: TroughComponent;
  let fixture: ComponentFixture<TroughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
