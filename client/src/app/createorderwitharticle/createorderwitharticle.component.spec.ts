import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateorderwitharticleComponent } from './createorderwitharticle.component';

describe('CreateorderwitharticleComponent', () => {
  let component: CreateorderwitharticleComponent;
  let fixture: ComponentFixture<CreateorderwitharticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateorderwitharticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateorderwitharticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
