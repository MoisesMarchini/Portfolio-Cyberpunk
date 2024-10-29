import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { WindowService } from './services/window.service';
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { CurtainComponent } from "./components/curtain/curtain.component";
import { MenuComponent } from "./layout/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpinnerComponent, CurtainComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio-Cyberpunk';
  loadTime: number = 0; // Variável para armazenar o tempo de carregamento
  startTime: number = 0;

  constructor(private windowService: WindowService) {
    this.startTime = performance.now();
  }

  ngOnInit() {
    environment.cases;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.windowService.set('scrollY', window.scrollY);
  }

  @HostListener('window:load')
  onLoad() {
    this.loadTime = performance.now();
    this.windowService.set('load', true);
  }
}
