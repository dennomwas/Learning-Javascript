import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesformComponent } from './coordinatesform.component';

describe('CoordinatesformComponent', () => {
  let component: CoordinatesformComponent;
  let fixture: ComponentFixture<CoordinatesformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatesformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatesformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
