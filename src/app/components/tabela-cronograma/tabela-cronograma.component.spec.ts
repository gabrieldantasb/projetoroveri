import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCronogramaComponent } from './tabela-cronograma.component';

describe('TabelaCronogramaComponent', () => {
  let component: TabelaCronogramaComponent;
  let fixture: ComponentFixture<TabelaCronogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCronogramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
