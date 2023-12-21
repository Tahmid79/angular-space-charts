import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartHolderComponent } from './line-chart-holder.component';

describe('LineChartHolderComponent', () => {
  let component: LineChartHolderComponent;
  let fixture: ComponentFixture<LineChartHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineChartHolderComponent]
    });
    fixture = TestBed.createComponent(LineChartHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
