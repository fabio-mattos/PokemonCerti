import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabioComponent } from './fabio.component';

describe('FabioComponent', () => {
  let component: FabioComponent;
  let fixture: ComponentFixture<FabioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FabioComponent]
    });
    fixture = TestBed.createComponent(FabioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
