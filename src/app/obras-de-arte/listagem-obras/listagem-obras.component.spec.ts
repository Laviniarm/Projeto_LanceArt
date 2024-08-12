import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemObrasComponent } from './listagem-obras.component';

describe('ListagemObrasComponent', () => {
  let component: ListagemObrasComponent;
  let fixture: ComponentFixture<ListagemObrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemObrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
