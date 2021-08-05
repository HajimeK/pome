import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExperiencesAimlComponent } from './profile-experiences-aiml.component';

describe('ProfileExperiencesAimlComponent', () => {
  let component: ProfileExperiencesAimlComponent;
  let fixture: ComponentFixture<ProfileExperiencesAimlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileExperiencesAimlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExperiencesAimlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
