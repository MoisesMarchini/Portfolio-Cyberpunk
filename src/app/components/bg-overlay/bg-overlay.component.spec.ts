import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgOverlayComponent } from './bg-overlay.component';

describe('BgOverlayComponent', () => {
  let component: BgOverlayComponent;
  let fixture: ComponentFixture<BgOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
