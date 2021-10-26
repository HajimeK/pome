import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesContentComponent } from './experiences-content.component';

describe('ExperiencesContentComponent', () => {
  let component: ExperiencesContentComponent;
  let fixture: ComponentFixture<ExperiencesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
