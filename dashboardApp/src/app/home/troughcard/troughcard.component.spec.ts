import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroughcardComponent } from './troughcard.component';

describe('TroughcardComponent', () => {
  let component: TroughcardComponent;
  let fixture: ComponentFixture<TroughcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroughcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroughcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
