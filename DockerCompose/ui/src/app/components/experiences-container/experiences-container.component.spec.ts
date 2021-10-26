import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesContainerComponent } from './experiences-container.component';

describe('ExperiencesContainerComponent', () => {
  let component: ExperiencesContainerComponent;
  let fixture: ComponentFixture<ExperiencesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
