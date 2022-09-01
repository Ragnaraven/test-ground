import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VwSelectorComponent } from './vw-selector.component';

describe('VwSelectorComponent', () => {
  let component: VwSelectorComponent;
  let fixture: ComponentFixture<VwSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VwSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VwSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
