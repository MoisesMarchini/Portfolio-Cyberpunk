import { Component } from '@angular/core';
import { Case } from '../../models/case';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './case-details.component.html',
  styleUrl: './case-details.component.scss'
})
export class CaseDetailsComponent {
  id: string = '';
  case: Case = new Case();
}
