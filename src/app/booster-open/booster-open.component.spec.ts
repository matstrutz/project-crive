import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosterOpenComponent } from './booster-open.component';

describe('BoosterOpenComponent', () => {
  let component: BoosterOpenComponent;
  let fixture: ComponentFixture<BoosterOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoosterOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoosterOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
