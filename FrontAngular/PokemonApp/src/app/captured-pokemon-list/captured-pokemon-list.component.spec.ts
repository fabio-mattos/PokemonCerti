import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturedPokemonListComponent } from './captured-pokemon-list.component';

describe('CapturedPokemonListComponent', () => {
  let component: CapturedPokemonListComponent;
  let fixture: ComponentFixture<CapturedPokemonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapturedPokemonListComponent]
    });
    fixture = TestBed.createComponent(CapturedPokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
