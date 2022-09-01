import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeganWitchesComponent } from './vegan-witches.component';

describe('VeganWitchesComponent', () => {
  let component: VeganWitchesComponent;
  let fixture: ComponentFixture<VeganWitchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeganWitchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeganWitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
