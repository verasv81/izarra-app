import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {any[]} tags
   * @returns {any[]}
   */
  transform(items: any[], tags: any[]): any[] {
    if (!items) {
      return [];
    }
    if (tags.length === 0) {
      return items;
    }

    tags = tags.map(el => el.toLocaleLowerCase());
    return items.filter(it => {
      return it?.tags?.some(item => tags.includes(item.toLocaleLowerCase()));
    });
  }
}