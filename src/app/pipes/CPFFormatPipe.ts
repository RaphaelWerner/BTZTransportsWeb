import { Pipe, PipeTransform } from '@angular/core';
import { CategoriaCNH } from '../models/Enums';

@Pipe({
  name: 'formatCPF',
  standalone: true,
})
export class formatCPF implements PipeTransform {
    transform(value: string): string {
        if (value.length === 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        }   
        return value;
    }
}