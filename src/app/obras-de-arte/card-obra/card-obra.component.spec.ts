import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardObraComponent } from './card-obra.component';

describe('CardObraComponent', () => {
  let component: CardObraComponent;
  let fixture: ComponentFixture<CardObraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardObraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
