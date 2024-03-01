import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Personnel Profile Portal';
  showNavBar: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Hide navigation bar if on login page or home page, show on all other pages
        this.showNavBar = !['/login', '/'].includes(event.url);
      }
    });
  }
}
