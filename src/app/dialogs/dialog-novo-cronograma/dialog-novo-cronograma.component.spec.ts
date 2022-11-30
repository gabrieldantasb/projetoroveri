import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNovoCronogramaComponent } from './dialog-novo-cronograma.component';

describe('DialogNovoCronogramaComponent', () => {
  let component: DialogNovoCronogramaComponent;
  let fixture: ComponentFixture<DialogNovoCronogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNovoCronogramaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNovoCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
