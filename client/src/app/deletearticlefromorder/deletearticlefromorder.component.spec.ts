import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletearticlefromorderComponent } from './deletearticlefromorder.component';

describe('DeletearticlefromorderComponent', () => {
  let component: DeletearticlefromorderComponent;
  let fixture: ComponentFixture<DeletearticlefromorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletearticlefromorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletearticlefromorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
