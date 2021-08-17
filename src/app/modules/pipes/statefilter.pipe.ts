import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statefilter',
})
export class StatefilterPipe implements PipeTransform {
  transform(list: any[], state: string): any[] {
    if (!state) return list;
    let booleanState: boolean = state === 'completed';
    return list.filter((item) => item.completed == booleanState);
  }
}
