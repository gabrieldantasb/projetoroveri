import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNovaAtividadeComponent } from './dialog-nova-atividade.component';

describe('DialogNovaAtividadeComponent', () => {
  let component: DialogNovaAtividadeComponent;
  let fixture: ComponentFixture<DialogNovaAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNovaAtividadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogNovaAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
