import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list: any[], numberId: string): any[] {
    if (!numberId) return list;
    return list.filter((item, index) => item.userId === parseInt(numberId));
  }
}
