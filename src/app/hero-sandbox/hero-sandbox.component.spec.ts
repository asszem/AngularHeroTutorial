import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSandboxComponent } from './hero-sandbox.component';

describe('HeroSandboxComponent', () => {
  let component: HeroSandboxComponent;
  let fixture: ComponentFixture<HeroSandboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSandboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
