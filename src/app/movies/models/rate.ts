export class RateModel {
  source: String;
  value: String;

  constructor(rate: any) {
    this.source = rate.source;
    this.value = rate.value;
  }
}
