import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrehijoComponent } from './padrehijo.component';

describe('PadrehijoComponent', () => {
  let component: PadrehijoComponent;
  let fixture: ComponentFixture<PadrehijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrehijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadrehijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
