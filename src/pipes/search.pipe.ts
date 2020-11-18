import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appSearch' })
export class SearchPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      // TODO: fix this stuff
      return it?.tags.reduce((a, b) => a || RegExp(b).test(searchText), false) || it.name.toLocaleLowerCase().includes(searchText)
        || it.full_description.toLocaleLowerCase().includes(searchText);
    });
  }
}