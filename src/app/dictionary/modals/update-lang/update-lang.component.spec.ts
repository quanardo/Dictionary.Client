import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLangComponent } from './update-lang.component';

describe('UpdateLangComponent', () => {
  let component: UpdateLangComponent;
  let fixture: ComponentFixture<UpdateLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
