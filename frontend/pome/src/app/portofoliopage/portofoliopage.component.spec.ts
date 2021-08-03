import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofoliopageComponent } from './portofoliopage.component';

describe('PortofoliopageComponent', () => {
  let component: PortofoliopageComponent;
  let fixture: ComponentFixture<PortofoliopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortofoliopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortofoliopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
