import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesHeadComponent } from './experiences-head.component';

describe('ExperienceHeadComponent', () => {
  let component: ExperiencesHeadComponent;
  let fixture: ComponentFixture<ExperiencesHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
