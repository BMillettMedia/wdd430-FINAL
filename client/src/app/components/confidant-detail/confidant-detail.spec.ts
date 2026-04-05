import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidantDetail } from './confidant-detail';

describe('ConfidantDetail', () => {
  let component: ConfidantDetail;
  let fixture: ComponentFixture<ConfidantDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfidantDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfidantDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
