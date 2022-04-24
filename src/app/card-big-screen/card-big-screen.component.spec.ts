import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBigScreenComponent } from './card-big-screen.component';

describe('CardBigScreenComponent', () => {
  let component: CardBigScreenComponent;
  let fixture: ComponentFixture<CardBigScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBigScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBigScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
