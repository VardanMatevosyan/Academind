import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(values: any, sortField: string): any {
    if (values.length === 0) {
      return values;
    }
    return values.sort(
      (firstValue,secondValue) =>
        (firstValue[sortField] > secondValue[sortField]) ? 1
          : ((secondValue[sortField] > firstValue[sortField]) ? -1
          : 0));
  }
}
