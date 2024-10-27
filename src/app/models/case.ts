export class Case {
  title = '';
  body = '';
  bannerUrl = '';
  tags = '';
  category = '';
  externalLinks: {label: string, url: string}[] = [];

  constructor(params?: Partial<Case>) {
    if (params){
      Object.assign(this, params);
      this.bannerUrl = !!this.bannerUrl? this.bannerUrl : `/cases/${this.title.replaceAll(' ','-').toLowerCase()}.jpeg`
    }
  }
}
