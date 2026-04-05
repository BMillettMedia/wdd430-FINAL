import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidantList } from 'confidant-list';

describe('ConfidantList', () => {
  let component: ConfidantList;
  let fixture: ComponentFixture<ConfidantList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfidantList],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfidantList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
