import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WetwastePage } from './wetwaste.page';

describe('WetwastePage', () => {
  let component: WetwastePage;
  let fixture: ComponentFixture<WetwastePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WetwastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
