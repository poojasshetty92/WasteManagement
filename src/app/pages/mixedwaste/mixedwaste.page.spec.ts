import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MixedwastePage } from './mixedwaste.page';

describe('MixedwastePage', () => {
  let component: MixedwastePage;
  let fixture: ComponentFixture<MixedwastePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MixedwastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
