import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bg-overlay',
  standalone: true,
  imports: [],
  templateUrl: './bg-overlay.component.html',
  styleUrl: './bg-overlay.component.scss'
})
export class BgOverlayComponent {
  @Input() scrolled = false;
}
