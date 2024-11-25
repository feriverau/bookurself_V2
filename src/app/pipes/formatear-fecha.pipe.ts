import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatearFecha' 
})
export class FormatearFechaPipe implements PipeTransform {

  transform(value: string): string {
    const fecha = new Date(value);
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
  }

}
