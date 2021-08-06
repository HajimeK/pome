import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExperiencesIotComponent } from './profile-experiences-iot.component';

describe('ProfileExperiencesIotComponent', () => {
  let component: ProfileExperiencesIotComponent;
  let fixture: ComponentFixture<ProfileExperiencesIotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileExperiencesIotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExperiencesIotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
