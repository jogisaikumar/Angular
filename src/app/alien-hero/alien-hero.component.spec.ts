import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlienHeroComponent } from './alien-hero.component';

describe('AlienHeroComponent', () => {
  let component: AlienHeroComponent;
  let fixture: ComponentFixture<AlienHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlienHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlienHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
