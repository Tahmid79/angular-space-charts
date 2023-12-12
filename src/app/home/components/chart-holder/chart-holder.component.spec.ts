import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHolderComponent } from './chart-holder.component';

describe('ChartHolderComponent', () => {
  let component: ChartHolderComponent;
  let fixture: ComponentFixture<ChartHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartHolderComponent]
    });
    fixture = TestBed.createComponent(ChartHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
