import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerTableComponent } from './marker-table.component';

describe('MarkerTableComponent', () => {
  let component: MarkerTableComponent;
  let fixture: ComponentFixture<MarkerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkerTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarkerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
