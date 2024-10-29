import { Component, Input } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { CurtainService } from '../../components/curtain/curtain.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() enableBg = false;
  isMenuOpen = false;
  isCurtainClosed = false;

  constructor(private menuService: MenuService, private curtainService: CurtainService) {
    menuService.$isOpen.subscribe(isOpen => this.isMenuOpen = isOpen);
    curtainService.$state.subscribe(state => this.isCurtainClosed = state === 'closed');
  }

  openMenu() {
    if (this.isMenuOpen || !this.isCurtainClosed) return;
    this.isMenuOpen = true;
    this.menuService.open();
  }
}
