import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSideBarComponent } from './open-side-bar.component';

describe('OpenSideBarComponent', () => {
  let component: OpenSideBarComponent;
  let fixture: ComponentFixture<OpenSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
