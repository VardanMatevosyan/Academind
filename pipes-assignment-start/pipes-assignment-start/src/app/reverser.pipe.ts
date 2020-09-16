import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'reverser'
})
export class ReverserPipe implements PipeTransform {
  transform(value: any): any {
    let splitValues: string[] = value.split('').reverse();
    return splitValues.join('');
  }
}
