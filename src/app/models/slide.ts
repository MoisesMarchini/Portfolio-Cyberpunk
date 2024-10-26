import { Case } from "./case";

export class Slide {
  bgUrl = '';
  title = '';
  category = '';
  route = '';
  index = 0;
  state: SlideState = SlideState.undefined;

  constructor(params?: Partial<Slide>) {
    if (params)
      Object.assign(this, params);
  }

  static fromCase(baseCase: Case, index?: number) {
    return new Slide({
      bgUrl: baseCase.bannerUrl,
      title: baseCase.title,
      category: baseCase.category,
      route: baseCase.title,
      index
    });
  }
}

export enum SlideState {
  prev = 'prev' , curr = 'curr' , next = 'next' , undefined = 'undefined' ,
}
