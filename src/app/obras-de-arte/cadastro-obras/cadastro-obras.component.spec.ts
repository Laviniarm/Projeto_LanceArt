import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroObrasComponent } from './cadastro-obras.component';

describe('CadastroObrasComponent', () => {
  let component: CadastroObrasComponent;
  let fixture: ComponentFixture<CadastroObrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroObrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
