import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: true
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], terms: number): any[] {
    if(!items) return [];
    if(!terms) return items;
    return items.filter( it => {
      return (it.bookingId == terms);
    });
  }
}
