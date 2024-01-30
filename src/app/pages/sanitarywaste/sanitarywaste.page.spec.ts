import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanitarywastePage } from './sanitarywaste.page';

describe('SanitarywastePage', () => {
  let component: SanitarywastePage;
  let fixture: ComponentFixture<SanitarywastePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SanitarywastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
