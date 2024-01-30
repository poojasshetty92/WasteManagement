import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrywastePage } from './drywaste.page';

describe('DrywastePage', () => {
  let component: DrywastePage;
  let fixture: ComponentFixture<DrywastePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DrywastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
