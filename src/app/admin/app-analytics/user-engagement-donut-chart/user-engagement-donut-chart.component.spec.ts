import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserEngagementDonutChartComponent } from './user-engagement-donut-chart.component';

describe('UserEngagementDonutChartComponent', () => {
  let component: UserEngagementDonutChartComponent;
  let fixture: ComponentFixture<UserEngagementDonutChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEngagementDonutChartComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserEngagementDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
