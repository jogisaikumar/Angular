import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentZippyComponent } from './parent-zippy.component';

describe('ParentZippyComponent', () => {
  let component: ParentZippyComponent;
  let fixture: ComponentFixture<ParentZippyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentZippyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentZippyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
