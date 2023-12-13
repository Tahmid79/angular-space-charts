import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveChartComponent } from './progressive-chart.component';

describe('ProgressiveChartComponent', () => {
  let component: ProgressiveChartComponent;
  let fixture: ComponentFixture<ProgressiveChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressiveChartComponent]
    });
    fixture = TestBed.createComponent(ProgressiveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
