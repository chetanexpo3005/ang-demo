import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startCapital'
})
export class StartCapitalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    debugger;
    if (value !== null && value !== '') {
      const newVal = value.charAt(0).toUpperCase() + value.slice(1);
      return newVal;
    } else {
      return '';
    }
  }

}
