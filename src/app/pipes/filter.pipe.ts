import { Pipe, PipeTransform } from '@angular/core';
import { Sonnet } from "app/dtos/sonnet.dto";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(sonnets: Sonnet[], searchString: string): Sonnet[] {
    if (!sonnets) return [];
    if (!searchString) return sonnets;
    searchString = searchString.toLowerCase();

    let returnSonnets = [];

    sonnets.forEach(sonnet => {
      if (sonnet.lines.filter(item => { return item.toLowerCase().includes(searchString) }).length > 0) {
        returnSonnets.push(sonnet);
      }

    })
    return returnSonnets;
  }
}


