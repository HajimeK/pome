import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExperiencesBlockchainComponent } from './profile-experiences-blockchain.component';

describe('ProfileExperiencesBlockchainComponent', () => {
  let component: ProfileExperiencesBlockchainComponent;
  let fixture: ComponentFixture<ProfileExperiencesBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileExperiencesBlockchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExperiencesBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
