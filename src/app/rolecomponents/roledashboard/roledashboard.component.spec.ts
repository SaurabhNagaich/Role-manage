import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoledashboardComponent } from './roledashboard.component';

describe('RoledashboardComponent', () => {
  let component: RoledashboardComponent;
  let fixture: ComponentFixture<RoledashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoledashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoledashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
