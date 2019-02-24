import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { CookieService } from 'ngx-cookie-service';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let home: HomeComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        NavMenuComponent
      ],
      imports: [RouterTestingModule],
      providers: [HomeComponent, NavMenuComponent
        , CookieService],
    }); 
    fixture = TestBed.createComponent(HomeComponent);
    home = fixture.componentInstance;
    de = fixture.debugElement;

    spyOn(home, 'loggedIn');
    
  }));

  it('should be created', () => {
      expect(home).toBeDefined();
  });
  it('should call loggedIn method', () => {
    
      home.loggedIn();
      expect(home.loggedIn).toHaveBeenCalled();
  });
});

