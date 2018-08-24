import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapExtendComponent } from './map-extend.component';

describe('MapExtendComponent', () => {
  let component: MapExtendComponent;
  let fixture: ComponentFixture<MapExtendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapExtendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapExtendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
