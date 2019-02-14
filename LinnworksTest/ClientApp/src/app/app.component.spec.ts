import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';

describe('AppComponent', () => {
  let app: AppComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavMenuComponent,
        AppComponent
      ],
      imports: [RouterTestingModule],
      providers: [CookieService],
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    de = fixture.debugElement;

  }));

  it('should create the app', () => {
    expect(app).toBeDefined();
  });

  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('app');
  }));
});

