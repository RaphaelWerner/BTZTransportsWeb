import { Pipe, PipeTransform } from '@angular/core';
import { Combustivel } from '../models/Enums';

@Pipe({
  name: 'tipoCombustivel',
  standalone: true,
})
export class EnumCombustivelPipe implements PipeTransform {
  transform(value: number): string {
    return Combustivel[value];
  }
}