import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchontvComponent } from './watchontv.component';

describe('WatchontvComponent', () => {
  let component: WatchontvComponent;
  let fixture: ComponentFixture<WatchontvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchontvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchontvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
