import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info1 = ["John Mathew", "E345", "j@nvc.net"];
  info2: string[] = ["Rob Wilson", "E134", "r@bwl.net"];
  info3: string[] = ["John Mathew", "E562", "r@adm.net"];

  getInfo1(): string[] {
    return this.info1
  }

  getInfo2() : string[] {
    return this.info2
  }

  getInfo3() : string[] {
    return this.info3
  }

  constructor() { }
}
