import { Pipe, PipeTransform } from '@angular/core';
import { CategoriaCNH } from '../models/Enums';

@Pipe({
  name: 'categoriaCNH',
  standalone: true,
})
export class EnumCategoriaCNHPipe implements PipeTransform {
  transform(value: number): string {
    return CategoriaCNH[value];
  }
}