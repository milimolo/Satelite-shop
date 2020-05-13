import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceFormatterService {

  constructor() { }

  formatPrice(price: number): string {
    const priceFormat = '' + price;
    if (priceFormat.length < 4) {
      return priceFormat + 'kr';
    } else {
      const firstComma = priceFormat.length % 3;
      return this.priceFormatter(priceFormat, firstComma) + 'kr';
    }
  }

  private priceFormatter(priceToFormat: string, firstComma: number): string {
    let priceFormatted = '';
    let newComma = 0;
    for (let i = 0; i < priceToFormat.length; i++) {
      newComma++;
      if (i === firstComma && i !== 0) {
        priceFormatted = priceFormatted + '.' + priceToFormat[i];
        newComma = 1;
      } else if (newComma === 3 && i !== priceToFormat.length - 1) {
        priceFormatted = priceFormatted + priceToFormat[i] + '.';
        newComma = 0;
      } else {
        priceFormatted = priceFormatted + priceToFormat[i];
      }
    }

    return priceFormatted;
  }
}
