import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsarticlesPage } from './newsarticles.page';

describe('NewsarticlesPage', () => {
  let component: NewsarticlesPage;
  let fixture: ComponentFixture<NewsarticlesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsarticlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
