import { Component, HostListener } from '@angular/core';
import { Case } from '../../models/case';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { WindowService } from '../../services/window.service';
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { BgOverlayComponent } from "../../components/bg-overlay/bg-overlay.component";
import { SliderService } from '../../components/slider/slider.service';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, NavbarComponent, BgOverlayComponent],
  templateUrl: './case-details.component.html',
  styleUrl: './case-details.component.scss'
})
export class CaseDetailsComponent {
  caseTitle: string = '';
  case: Case = new Case();
  scrolled = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private windowService: WindowService, private sliderService: SliderService) {
    windowService.getValueAsObservable('scrollY').subscribe({
      next: (value) => this.onScroll(value as number)
    })
  }

  onScroll(scrollY?: number) {
    this.scrolled = (scrollY?? window.scrollY) > 1
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.caseTitle = params.get('caseTitle') ?? '';
        this.loadCase();
      },
      error(err) {
        console.error(err)
      },
    })
  }

  loadCase() {
    let caseIndex = 0;
    const foundedCase = environment.cases.find((_case, index) => {
      if (_case.title == this.caseTitle) {
        caseIndex = index;
        return true;
      }

      return false;
    });
    if (foundedCase){
      this.case = foundedCase;
      this.sliderService.setCurrentSlide(caseIndex);
    }
    else {
      this.router.navigateByUrl('/')
    }

    this.onScroll();
  }
}
