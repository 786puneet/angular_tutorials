import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDriectivesComponent } from './structural-driectives.component';

describe('StructuralDriectivesComponent', () => {
  let component: StructuralDriectivesComponent;
  let fixture: ComponentFixture<StructuralDriectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDriectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDriectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
