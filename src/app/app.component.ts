import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { WindowService } from './services/window.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio-Cyberpunk';

  constructor(private windowService: WindowService){}

  ngOnInit() {
    environment.cases;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.windowService.set('scrollY', window.scrollY);
  }
}
