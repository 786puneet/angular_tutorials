import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrributeDriectiveComponent } from './atrribute-driective.component';

describe('AtrributeDriectiveComponent', () => {
  let component: AtrributeDriectiveComponent;
  let fixture: ComponentFixture<AtrributeDriectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtrributeDriectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtrributeDriectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
