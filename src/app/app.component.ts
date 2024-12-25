import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  constructor(private router: Router) {}


}
