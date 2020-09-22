import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrcturalNgforComponent } from './strctural-ngfor.component';

describe('StrcturalNgforComponent', () => {
  let component: StrcturalNgforComponent;
  let fixture: ComponentFixture<StrcturalNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrcturalNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrcturalNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
