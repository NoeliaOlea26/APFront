import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvoproyComponent } from './nvoproy.component';

describe('NvoproyComponent', () => {
  let component: NvoproyComponent;
  let fixture: ComponentFixture<NvoproyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvoproyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvoproyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
