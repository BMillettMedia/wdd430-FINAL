import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidantEdit } from './confidant-edit';

describe('ConfidantEdit', () => {
  let component: ConfidantEdit;
  let fixture: ComponentFixture<ConfidantEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfidantEdit],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfidantEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
