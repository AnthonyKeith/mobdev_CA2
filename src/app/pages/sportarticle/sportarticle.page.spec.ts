import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportarticlePage } from './sportarticle.page';

describe('SportarticlePage', () => {
  let component: SportarticlePage;
  let fixture: ComponentFixture<SportarticlePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SportarticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
