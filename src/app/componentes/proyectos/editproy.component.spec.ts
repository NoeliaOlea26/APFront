import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproyComponent } from './editproy.component';

describe('EditproyComponent', () => {
  let component: EditproyComponent;
  let fixture: ComponentFixture<EditproyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditproyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
