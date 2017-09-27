import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicStartComponent } from './comic-start.component';

describe('ComicStartComponent', () => {
  let component: ComicStartComponent;
  let fixture: ComponentFixture<ComicStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
