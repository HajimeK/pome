import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExperiencesAzureComponent } from './profile-experiences-azure.component';

describe('ProfileExperiencesAzureComponent', () => {
  let component: ProfileExperiencesAzureComponent;
  let fixture: ComponentFixture<ProfileExperiencesAzureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileExperiencesAzureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExperiencesAzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
