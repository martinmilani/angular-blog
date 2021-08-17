import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(list: any[], text: string): any[] {
    if (!text) return list;
    return list.filter((post) =>
      post.title.toLowerCase().includes(text.toLocaleLowerCase())
    );
  }
}
