import { Component } from '@angular/core';
import { MenuService } from './menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  isOpen = true;

  constructor(private menuService: MenuService) {
    menuService.$isOpen.subscribe(isOpen => this.isOpen = isOpen);
  }

  close() {
    this.menuService.close();
  }
}
