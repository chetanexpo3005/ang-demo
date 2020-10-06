import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NaPipe',
  pure: true
})
export class NaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value !== '') {
      return value;
    } else {
      return 'Na';
    }
  }


}
