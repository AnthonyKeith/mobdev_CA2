import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LottoPage } from './lotto.page';

describe('LottoPage', () => {
  let component: LottoPage;
  let fixture: ComponentFixture<LottoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LottoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
